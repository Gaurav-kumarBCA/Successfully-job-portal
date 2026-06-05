import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaFilePdf,
  FaEnvelope,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const GetAllApplicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/recruiter/applicants`, {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();

        if (data.success) {
          setApplicants(data.data);
        }
      } catch (error) {
        toast.error("Failed to fetch applicants");
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">Loading Applicants...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="bg-white rounded-3xl shadow-sm p-8 mb-6">
        <h1 className="text-4xl font-bold">
          Applicants Management
        </h1>

        <p className="text-gray-500 mt-3">
          Review applications, resumes and candidate details.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <FaUsers className="text-4xl text-blue-600 mb-3" />
          <h1 className="text-3xl font-bold">
            {applicants.length}
          </h1>
          <p className="text-gray-500">
            Total Applicants
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <FaBriefcase className="text-4xl text-green-600 mb-3" />
          <h1 className="text-3xl font-bold">
            {
              [...new Set(applicants.map((a) => a.job_id))]
                .length
            }
          </h1>
          <p className="text-gray-500">
            Active Job Applications
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <FaFilePdf className="text-4xl text-red-500 mb-3" />
          <h1 className="text-3xl font-bold">
            {applicants.length}
          </h1>
          <p className="text-gray-500">
            Uploaded Resumes
          </p>
        </div>

      </div>


      <div className="hidden lg:block bg-white rounded-3xl shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>
                <th className="text-left p-5">Candidate</th>
                <th className="text-left p-5">Email</th>
                <th className="text-left p-5">Job</th>
                <th className="text-left p-5">Applied</th>
                <th className="text-left p-5">Resume</th>
              </tr>

            </thead>

            <tbody>

              {applicants.map((applicant) => (

                <tr
                  key={applicant.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-3">

                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {applicant.name
                          ?.charAt(0)
                          ?.toUpperCase()}
                      </div>

                      <div>
                        <h1 className="font-semibold">
                          {applicant.name}
                        </h1>

                        <p className="text-gray-500 text-sm">
                          Applicant ID #{applicant.id}
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="p-5">
                    {applicant.email}
                  </td>

                  <td className="p-5">
                    {applicant.job_name}
                  </td>

                  <td className="p-5">
                    {new Date(
                      applicant.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-5">

                    <a
                      href={`${import.meta.env.VITE_SERVER_URL}${applicant.resume}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      View Resume
                    </a>

                  </td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      <div className="lg:hidden space-y-4">

        {applicants.map((applicant) => (

          <div
            key={applicant.id}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex justify-center items-center font-bold text-xl">
                {applicant.name
                  ?.charAt(0)
                  ?.toUpperCase()}
              </div>

              <div>
                <h1 className="font-bold text-lg">
                  {applicant.name}
                </h1>

                <p className="text-gray-500">
                  {applicant.job_name}
                </p>
              </div>

            </div>

            <div className="mt-5 space-y-3">

              <div className="flex gap-2 items-center">
                <FaEnvelope />
                {applicant.email}
              </div>

              <div className="flex gap-2 items-center">
                <FaCalendarAlt />
                {new Date(
                  applicant.created_at
                ).toLocaleDateString()}
              </div>

            </div>

            <a
              href={`${import.meta.env.VITE_SERVER_URL}${applicant.resume}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block bg-red-500 text-white px-5 py-3 rounded-xl"
            >
              View Resume
            </a>

          </div>

        ))}

      </div>

    </div>
  );
};

export default GetAllApplicants;