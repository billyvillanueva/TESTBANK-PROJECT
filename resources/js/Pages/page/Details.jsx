import React from "react";
import { useEffect, useRef, useState } from "react";
export default function Details({ data }) {
    const [courseRecords, setcourseRecords] = useState([]);
    useEffect(() => {
        const getCoursedata = async () => {
            const reqdata = await fetch("http://127.0.0.1:8000/jsoncourse");
            const resdata = await reqdata.json();
            // setUserdata(resdata);
            setcourseRecords(resdata);
        };
        getCoursedata();
    }, []);
    const [isChecked, setIsChecked] = useState(false);
    const setCourseCheck = (e, not, code) => {
        if (e.target.checked === true) {
        }

        setIsChecked(not);
    };
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-xl-auto">
                    <div className="card">
                        <div className="card-body pb-0">
                            <div className="row align-items-center">
                                <div className="col-md-3">
                                    <div className="text-center border-end flex flex-column items-center">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            className="img-fluid avatar-xxl rounded-circle"
                                            alt=""
                                        />
                                        <h4 className="text-primary font-size-20 mt-3 mb-2">
                                            {data.name}
                                        </h4>
                                        <h5 className="text-muted font-size-13 mb-0">
                                            ID#: {data.IDnumber}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="ms-3">
                                        <div>
                                            <h4 className="card-title mb-2 font-bold text-xl">
                                                {data.role}
                                            </h4>
                                            <p className="mb-0 text-muted">
                                                Hi I'm {data.name},has been the
                                                industry's standard dummy text
                                                To an English person alteration
                                                text.
                                            </p>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-md-12">
                                                <div>
                                                    <p className="text-muted mb-2 fw-medium">
                                                        <i className="mdi mdi-email-outline me-2"></i>
                                                        {data.email}
                                                    </p>
                                                    <p className="text-muted fw-medium mb-0">
                                                        <i className="mdi mdi-phone-in-talk-outline me-2"></i>
                                                        418-955-4703
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <ul
                                            className="nav nav-tabs nav-tabs-custom border-bottom-0 mt-3 nav-justfied"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <a
                                                    className="nav-link px-4 active"
                                                    data-bs-toggle="tab"
                                                    href="#course-tab"
                                                    role="tab"
                                                    aria-selected="false"
                                                    tabIndex="-1"
                                                >
                                                    <span className="d-block d-sm-none">
                                                        <i className="fas fa-home"></i>
                                                    </span>
                                                    <span className="d-none d-sm-block">
                                                        Handled Courses
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <a
                                                    className="nav-link px-4"
                                                    data-bs-toggle="tab"
                                                    href="#task-tab"
                                                    role="tab"
                                                    aria-selected="false"
                                                    tabIndex="-1"
                                                >
                                                    <span className="d-block d-sm-none">
                                                        <i className="mdi mdi-menu-open"></i>
                                                    </span>
                                                    <span className="d-none d-sm-block">
                                                        Tasks
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <a
                                                    className="nav-link px-4 "
                                                    data-bs-toggle="tab"
                                                    href="#team-tab"
                                                    role="tab"
                                                    aria-selected="false"
                                                    tabIndex="-1"
                                                >
                                                    <span className="d-block d-sm-none">
                                                        <i className="mdi mdi-account-group-outline"></i>
                                                    </span>
                                                    <span className="d-none d-sm-block">
                                                        Team
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="tab-content p-4">
                            {/* course window */}

                            <div
                                className="tab-pane active show"
                                id="course-tab"
                                role="tabpanel"
                            >
                                <h4 className="card-title mb-4">Courses</h4>
                                {courseRecords.map((data, index) => (
                                    <div className="row" key={index}>
                                        <div className="col-xl-12">
                                            <div
                                                className="task-list-box"
                                                id="landing-task"
                                            >
                                                <div id="task-item-1">
                                                    <div className="card task-box rounded-3">
                                                        <div className="card-body">
                                                            <div className="row align-items-center">
                                                                <div className="col-xl-6 col-sm-5">
                                                                    <form
                                                                        onSubmit={
                                                                            ""
                                                                        }
                                                                    >
                                                                        <div className="checklist form-check font-size-15">
                                                                            <input
                                                                                name={`${data.course_code}`}
                                                                                type="checkbox"
                                                                                className="form-check-input"
                                                                                id="customCheck1"
                                                                                onChange={
                                                                                    // () =>
                                                                                    //     setIsChecked(
                                                                                    //         !isChecked
                                                                                    //     ),
                                                                                    (
                                                                                        e
                                                                                    ) =>
                                                                                        setCourseCheck(
                                                                                            e,
                                                                                            !isChecked,
                                                                                            data.course_code
                                                                                        )
                                                                                }
                                                                            />
                                                                            <label
                                                                                className="form-check-label ms-1 task-title"
                                                                                htmlFor="customCheck1"
                                                                            >
                                                                                <span className="font-bold">
                                                                                    {
                                                                                        data.course_code
                                                                                    }
                                                                                </span>

                                                                                -
                                                                                {
                                                                                    data.course_title
                                                                                }
                                                                            </label>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="col-xl-6 col-sm-7">
                                                                    <div className="row align-items-center">
                                                                        <div className="col-xl-5 col-md-6 col-sm-5">
                                                                            <div className="avatar-group mt-3 mt-xl-0 task-assigne">
                                                                                <div className="avatar-group-item">
                                                                                    <a
                                                                                        href="javascript: void(0);"
                                                                                        className="d-inline-block"
                                                                                        data-bs-toggle="tooltip"
                                                                                        value="member-2"
                                                                                        data-bs-placement="top"
                                                                                        aria-label="Mark Powell"
                                                                                        data-bs-original-title="Mark Powell"
                                                                                    >
                                                                                        <img
                                                                                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                                            alt=""
                                                                                            className="rounded-circle avatar-sm"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="avatar-group-item">
                                                                                    <a
                                                                                        href="javascript: void(0);"
                                                                                        className="d-inline-block"
                                                                                        data-bs-toggle="tooltip"
                                                                                        value="member-4"
                                                                                        data-bs-placement="top"
                                                                                        aria-label="Craig Hall"
                                                                                        data-bs-original-title="Craig Hall"
                                                                                    >
                                                                                        <img
                                                                                            src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                                                                            alt=""
                                                                                            className="rounded-circle avatar-sm"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                                <div className="avatar-group-item">
                                                                                    <a
                                                                                        href="javascript: void(0);"
                                                                                        className="d-block"
                                                                                        data-bs-toggle="tooltip"
                                                                                        value="member-11"
                                                                                        data-bs-placement="top"
                                                                                        data-bs-original-title="Sarah Kerns"
                                                                                    >
                                                                                        <div className="avatar-sm">
                                                                                            <div className="avatar-title rounded-circle bg-info">
                                                                                                S
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-7 col-md-6 col-sm-7">
                                                                            <div className="d-flex flex-wrap gap-3 mt-3 mt-xl-0 justify-content-md-end">
                                                                                <div>
                                                                                    <span className="badge rounded-pill badge-soft-warning font-size-11 task-status">
                                                                                        Progress
                                                                                    </span>
                                                                                </div>
                                                                                <div>
                                                                                    <a
                                                                                        href="#"
                                                                                        className="mb-0 text-muted fw-medium"
                                                                                    >
                                                                                        <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                                                                        4/8
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a
                                                                                        href="#"
                                                                                        className="mb-0 text-muted fw-medium"
                                                                                        data-bs-toggle="modal"
                                                                                        data-bs-target=".bs-example-new-task"
                                                                                    >
                                                                                        <i
                                                                                            className="mdi mdi-square-edit-outline font-size-16 align-middle"
                                                                                            onclick="editTask('task-item-1')"
                                                                                        ></i>
                                                                                    </a>
                                                                                </div>
                                                                                <div>
                                                                                    <a
                                                                                        href="#"
                                                                                        className="delete-item"
                                                                                        onclick="deleteProjects('task-item-1')"
                                                                                    >
                                                                                        <i className="mdi mdi-trash-can-outline align-middle font-size-16 text-danger"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* end courses window */}
                            {/* task window */}
                            <div
                                className="tab-pane"
                                id="task-tab"
                                role="tabpanel"
                            >
                                <div className="d-flex align-items-center">
                                    <div className="flex-1">
                                        <h4 className="card-title mb-4">
                                            Task
                                        </h4>
                                    </div>
                                </div>

                                <div className="row" id="all-projects">
                                    <div
                                        className="col-md-6"
                                        id="project-items-1"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start"></div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-1')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                onclick="deleteProjects('project-items-1')"
                                                                data-id="project-items-1"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Marketing
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Every Marketing Plan
                                                        Needs
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-6"
                                                                aria-label="Terrell Soto"
                                                                data-bs-original-title="Terrell Soto"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-1"
                                                                aria-label="Ruhi Shah"
                                                                data-bs-original-title="Ruhi Shah"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-15"
                                                                data-bs-original-title="Denny Silva"
                                                            >
                                                                <div className="avatar-sm">
                                                                    <div className="avatar-title rounded-circle bg-primary">
                                                                        D
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-danger p-2 team-status">
                                                            Pending
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-2"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-success fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    13 Aug, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-2')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                href="javascript:void(0);"
                                                                onclick="deleteProjects('project-items-2')"
                                                                data-id="project-items-2"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Website Design
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Creating the design and
                                                        layout of a website.
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-10"
                                                                aria-label="Kelly Osborn"
                                                                data-bs-original-title="Kelly Osborn"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-2"
                                                                aria-label="John Page"
                                                                data-bs-original-title="John Page"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-success p-2 team-status">
                                                            Completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-3"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-warning fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    08 Sep, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-3')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                href="javascript: void(0);"
                                                                data-id="project-items-3"
                                                                onclick="deleteProjects('project-items-3')"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        UI / UX Design
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Plan and onduct user
                                                        research and analysis
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-3"
                                                                aria-label="Judy Newland"
                                                                data-bs-original-title="Judy Newland"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-5"
                                                                aria-label="Jeffery Legette"
                                                                data-bs-original-title="Jeffery Legette"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-6"
                                                                aria-label="Jose Rosborough"
                                                                data-bs-original-title="Jose Rosborough"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-warning p-2 team-status">
                                                            Progress
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-4"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-danger fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    20 Sep, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-4')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                href="javascript:void(0);"
                                                                data-id="project-items-4"
                                                                onclick="deleteProjects('project-items-4')"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Testing
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        The procurement
                                                        specifications should
                                                        describe
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-10"
                                                                aria-label="Jansh Wells"
                                                                data-bs-original-title="Jansh Wells"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-danger p-2 team-status">
                                                            Pending
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-5"
                                    >
                                        <div className="card mb-lg-0">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-success fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    12 April,
                                                                    2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-5')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                onclick="deleteProjects('project-items-5')"
                                                                data-id="project-items-5"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Typography
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Typography is the style
                                                        or appearance of text.
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-1"
                                                                aria-label="Ruhi Luft"
                                                                data-bs-original-title="Ruhi Luft"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-5"
                                                                aria-label="Elias Hardage"
                                                                data-bs-original-title="Elias Hardage"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value={
                                                                    "member-10"
                                                                }
                                                                aria-label="Jansh Wells"
                                                                data-bs-original-title="Jansh Wells"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-success p-2 team-status">
                                                            Completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end task window */}
                            {/* team window */}
                            <div
                                className="tab-pane"
                                id="team-tab"
                                role="tabpanel"
                            >
                                <div className="d-flex align-items-center">
                                    <div className="flex-1">
                                        <h4 className="card-title mb-4">
                                            Team
                                        </h4>
                                    </div>
                                </div>

                                <div className="row" id="all-projects">
                                    <div
                                        className="col-md-6"
                                        id="project-items-1"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-danger fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    21 Jun, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-1')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                onclick="deleteProjects('project-items-1')"
                                                                data-id="project-items-1"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Marketing
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Every Marketing Plan
                                                        Needs
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-6"
                                                                aria-label="Terrell Soto"
                                                                data-bs-original-title="Terrell Soto"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-1"
                                                                aria-label="Ruhi Shah"
                                                                data-bs-original-title="Ruhi Shah"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-15"
                                                                data-bs-original-title="Denny Silva"
                                                            >
                                                                <div className="avatar-sm">
                                                                    <div className="avatar-title rounded-circle bg-primary">
                                                                        D
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-danger p-2 team-status">
                                                            Pending
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-2"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-success fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    13 Aug, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-2')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                href="javascript:void(0);"
                                                                onclick="deleteProjects('project-items-2')"
                                                                data-id="project-items-2"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Website Design
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Creating the design and
                                                        layout of a website.
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-10"
                                                                aria-label="Kelly Osborn"
                                                                data-bs-original-title="Kelly Osborn"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-2"
                                                                aria-label="John Page"
                                                                data-bs-original-title="John Page"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-success p-2 team-status">
                                                            Completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-3"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-warning fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    08 Sep, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-3')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                href="javascript: void(0);"
                                                                data-id="project-items-3"
                                                                onclick="deleteProjects('project-items-3')"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        UI / UX Design
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Plan and onduct user
                                                        research and analysis
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-3"
                                                                aria-label="Judy Newland"
                                                                data-bs-original-title="Judy Newland"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-5"
                                                                aria-label="Jeffery Legette"
                                                                data-bs-original-title="Jeffery Legette"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-6"
                                                                aria-label="Jose Rosborough"
                                                                data-bs-original-title="Jose Rosborough"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-warning p-2 team-status">
                                                            Progress
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-4"
                                    >
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-danger fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    20 Sep, 2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-4')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                href="javascript:void(0);"
                                                                data-id="project-items-4"
                                                                onclick="deleteProjects('project-items-4')"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Testing
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        The procurement
                                                        specifications should
                                                        describe
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-10"
                                                                aria-label="Jansh Wells"
                                                                data-bs-original-title="Jansh Wells"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-danger p-2 team-status">
                                                            Pending
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="col-md-6"
                                        id="project-items-5"
                                    >
                                        <div className="card mb-lg-0">
                                            <div className="card-body">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-grow-1 align-items-start">
                                                        <div>
                                                            <h6 className="mb-0 text-muted">
                                                                <i className="mdi mdi-circle-medium text-success fs-3 align-middle"></i>
                                                                <span className="team-date">
                                                                    12 April,
                                                                    2021
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown ms-2">
                                                        <a
                                                            href="#"
                                                            className="dropdown-toggle font-size-16 text-muted"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="mdi mdi-dots-horizontal"></i>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                data-bs-toggle="modal"
                                                                data-bs-target=".bs-example-new-project"
                                                                onclick="editProjects('project-items-5')"
                                                            >
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                            >
                                                                Share
                                                            </a>
                                                            <div className="dropdown-divider"></div>
                                                            <a
                                                                className="dropdown-item delete-item"
                                                                onclick="deleteProjects('project-items-5')"
                                                                data-id="project-items-5"
                                                                href="javascript: void(0);"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="mb-1 font-size-17 team-title">
                                                        Typography
                                                    </h5>
                                                    <p className="text-muted mb-0 team-description">
                                                        Typography is the style
                                                        or appearance of text.
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="avatar-group float-start flex-grow-1 task-assigne">
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-1"
                                                                aria-label="Ruhi Luft"
                                                                data-bs-original-title="Ruhi Luft"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value="member-5"
                                                                aria-label="Elias Hardage"
                                                                data-bs-original-title="Elias Hardage"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="avatar-group-item">
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="d-inline-block"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                value={
                                                                    "member-10"
                                                                }
                                                                aria-label="Jansh Wells"
                                                                data-bs-original-title="Jansh Wells"
                                                            >
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    alt=""
                                                                    className="rounded-circle avatar-sm"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="align-self-end">
                                                        <span className="badge badge-soft-success p-2 team-status">
                                                            Completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end team window */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
