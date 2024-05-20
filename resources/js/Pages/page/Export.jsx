import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ApplicationLogo from "@/Components/ApplicationLogo";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Document, Packer, Paragraph, VerticalAlign } from "docx";
import { saveAs } from "file-saver";
import Docxtemplater from "docxtemplater";
import { docx } from "officegen";
import { fs } from "fs";
import PrimaryButton from "@/Components/PrimaryButton";

export default function QuizPage({ auth }) {
    const [LimitItem, setLimitItem] = useState(0);
    const setData = (e) => {
        const item = e.target.value;
        if (item <= 0) {
            setLimitItem(1);
        } else {
            setLimitItem(item);
        }
    };
    const [records, setRecords] = useState([{}]);
    const getQuizdata = async () => {
        const reqdata = await fetch(
            `http://127.0.0.1:8000/jsonQuizRandom/${LimitItem}`
        );
        const resdata = await reqdata.json();
        setRecords(resdata);
    };

    const p = docx.createP();
    p.addText("this is first paragraph");
    const out = fs.createWriteStream("result.docx");
    docx.generate(out);

    // const generateWordDocument = () => {
    //     const doc = new docx.Document();

    //     // Add content to the document
    //     doc.addSection({
    //         children: [
    //             new docx.Paragraph({
    //                 children: [
    //                     new docx.TextRun({
    //                         text: JSON.stringify(
    //                             records.map((a, b) => (
    //                                 <h1 key={b}> {a.Question}</h1>
    //                             ))
    //                         ),
    //                     }),
    //                 ],
    //             }),
    //         ],
    //     });
    //     docx.Packer.toBlob(doc).then((blob) => {
    //         saveAs(blob, "first.docx");
    //     });
    // };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Export ExamPaper
                </h2>
            }
        >
            <Head title="Export" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-md shadow-sm p-12 mb-4 flex">
                        <div className="flex">
                            <div className="flex flex-column m-2 h-full">
                                <label htmlFor="lvl">
                                    Level of Difficulty:
                                </label>
                                <select
                                    name="lvl"
                                    id="lvl"
                                    className="p-2 rounded-md cursor-pointer"
                                >
                                    <option value="">Easy</option>
                                    <option value="">Average</option>
                                    <option value="">Hard</option>
                                </select>
                            </div>
                            <div className="flex flex-column h-full m-2">
                                <label htmlFor="item">Number of Items:</label>
                                <input
                                    value={LimitItem}
                                    onChange={(e) => setData(e)}
                                    type="number"
                                    name="item"
                                    id="item"
                                    className="p-2 rounded-md cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center m-2 relative">
                            <PrimaryButton onClick={getQuizdata}>
                                Fetch/Filter
                            </PrimaryButton>
                        </div>
                    </div>
                    {records.length !== 1 && (
                        <div>
                            <div className="dark:bg-gray-800 overflow-hidden p-12 ">
                                <div>
                                    <div className="flex justify-center items-center mb-4 font-bold">
                                        <h1 className="opacity-75">
                                            -Page Preview-
                                        </h1>
                                    </div>
                                    <div className="flex justify-between">
                                        <h1 className="mb-2 ml-4 opacity-50">
                                            Page 1
                                        </h1>
                                    </div>
                                </div>
                                <div className="bg-white shadow-sm p-12 text-gray-900 dark:text-gray-100">
                                    <ApplicationLogo className="w-25 h-25 fill-current text-gray-500 mb-6" />
                                    {records.map((a, index) => (
                                        <div key={index}>
                                            <div className="w-100 h-full">
                                                <ol>
                                                    <li>
                                                        {index + 1}.&nbsp;
                                                        {a.Question}
                                                    </li>
                                                </ol>
                                                <ul
                                                    className="py-2"
                                                    style={{
                                                        paddingLeft: "50px",
                                                    }}
                                                >
                                                    <li
                                                        style={{
                                                            listStyleType:
                                                                "lower-alpha",
                                                            margin: "3px",
                                                        }}
                                                    >
                                                        {a.Aa}
                                                    </li>
                                                    <li
                                                        style={{
                                                            listStyleType:
                                                                "lower-alpha",
                                                            margin: "3px",
                                                        }}
                                                    >
                                                        {a.Ab}
                                                    </li>
                                                    <li
                                                        style={{
                                                            listStyleType:
                                                                "lower-alpha",
                                                            margin: "3px",
                                                        }}
                                                    >
                                                        {a.Ac}
                                                    </li>
                                                    <li
                                                        style={{
                                                            listStyleType:
                                                                "lower-alpha",
                                                            margin: "3px",
                                                        }}
                                                    >
                                                        {a.Ad}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <PrimaryButton onClick={generateDocx}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="mr-2 bi bi-box-arrow-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
                                        />
                                    </svg>
                                    Download now
                                </PrimaryButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
