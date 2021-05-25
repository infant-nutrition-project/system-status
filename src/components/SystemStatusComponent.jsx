import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DataService from "../api/DataService";

const JOB1_INIT_DATA = {
    "Timestamp": null,
    "DailyCount": [],
    "CumulativeCount": []
}

const JOB2_INIT_DATA = {
    "Timestamp": null,
    "ErrorCount": 0,
    "Data": []
}

class SystemStatusComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secret: "",
            isSecretWrong: false,
            showSystemStatusData: false,
            job1Data: JOB1_INIT_DATA,
            job2Data: JOB2_INIT_DATA
        };
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate(values) {
        let errors = {};
        if (values.secret === "" || values.secret.trim() === "") { errors.secret = "Must enter secret string"; }
        return errors;
    }

    onSubmit(values) {
        DataService.systemStatusData(values.secret)
            .then(response => {
                // console.log(response);
                this.setState({
                    isSecretWrong: false,
                    showSystemStatusData: true,
                    job1Data: {
                        "Timestamp": response.data.job1.Timestamp,
                        "DailyCount": response.data.job1.Result[0],
                        "CumulativeCount": response.data.job1.Result[1]
                    },
                    job2Data: {
                        "Timestamp": response.data.job2.Timestamp,
                        "ErrorCount": response.data.job2.Result.filter(entry => entry.status === "ERROR").length,
                        "Data": response.data.job2.Result
                    }
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    isSecretWrong: true,
                    showSystemStatusData: false,
                    job1Data: JOB1_INIT_DATA,
                    job2Data: JOB2_INIT_DATA
                })
            })
    }

    render() {
        let secret = this.state.secret;

        let job1Timestamp = this.state.job1Data.Timestamp;
        let job1DailyCount = this.state.job1Data.DailyCount;
        let job1CumulativeCount = this.state.job1Data.CumulativeCount;

        let job2Timestamp = this.state.job2Data.Timestamp;
        let job2ErrorCount = this.state.job2Data.job2ErrorCount;
        let job2Data = this.state.job2Data.Data;
        return (
            <>
                <h4>Secret Key</h4>
                <div className="container">
                    <Formik
                        initialValues={{ secret }}
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="secret" component="div" className="alert alert-warning" />
                                    {this.state.isSecretWrong && <div className="alert alert-danger">Secret INCORRECT. Please retry</div>}
                                    <fieldset className="form-group">
                                        <label>Secret key</label>
                                        <Field className="form-control" type="text" name="secret" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

                {this.state.showSystemStatusData && <>
                    <hr />
                    <div className="container">
                        <h3> Job 1 </h3>
                        <h4> Timestamp (UTC Time): {job1Timestamp} </h4>
                        <div className="row">
                            <div className="col">
                                <b>Daily Count</b>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            job1DailyCount.map(
                                                (daily) =>
                                                    <tr key={daily._id}>
                                                        <td>{daily._id}</td>
                                                        <td>{daily.total}</td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="col">
                                <b>Cumulative Count</b>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Cumulative count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            job1CumulativeCount.map(
                                                (user) =>
                                                    <tr key={user._id}>
                                                        <td>{user._id}</td>
                                                        <td>{user.cumulative_count}</td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="container">
                        <h3>Job 2</h3>
                        <h4> Timestamp (UTC Time): {job2Timestamp}</h4>
                        <b>{job2ErrorCount === 0 && "All status OK"}</b>
                        <b>{job2ErrorCount > 0 && `WARNING: ${job2ErrorCount} error(s) detected.`}</b>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    job2Data.map(
                                        (entry) =>
                                            <tr key={entry.name}>
                                                <td>{entry.name}</td>
                                                <td>{entry.status}</td>
                                                <td>{JSON.stringify(entry.info)}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </>}
            </>
        )
    }
}

export default SystemStatusComponent;