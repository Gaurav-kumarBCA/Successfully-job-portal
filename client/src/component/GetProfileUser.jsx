import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const icons = {
  mail: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  education: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  globe: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  resume: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  edit: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  back: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  ),
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
    <span className="mt-0.5 text-indigo-500 flex-shrink-0">{icon}</span>
    <div className="min-w-0">
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-sm text-slate-700 font-medium mt-0.5 break-words">
        {value || <span className="text-slate-300 font-normal">Not added</span>}
      </p>
    </div>
  </div>
);

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-5">
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center gap-4">
      <div className="w-24 h-24 rounded-2xl bg-slate-200" />
      <div className="h-5 w-40 bg-slate-200 rounded-full" />
      <div className="h-3 w-24 bg-slate-100 rounded-full" />
    </div>
    <div className="bg-white rounded-3xl p-5 space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-10 bg-slate-100 rounded-xl" />
      ))}
    </div>
  </div>
);

const GetProfileUser = ({ userId, onEdit }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ userId prop se lega, default 2 (baad mein dynamic karna)
  // const {id} = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(`${url}/user/mainProfile`, {
            method:"GET",
            credentials:"include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok && data.success) {
          setProfile(data.data);
        } else {
          setError(data.message || "Profile load nahi hua.");
        }
      } catch (err) {
        setError("Network error. Server se connect nahi ho paya.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const avatarColors = [
    "from-indigo-500 to-violet-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-rose-500",
  ];
  const avatarColor = profile
    ? avatarColors[profile.name.charCodeAt(0) % avatarColors.length]
    : avatarColors[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>
              <p className="text-sm text-slate-400">See the full profile on this page</p>
            </div>
          </div>
          {/* Edit button — onEdit prop se ProfileUser pe wapas jaayega */}
          {!loading && !error && (
           <NavLink to="/edit_profile">
             <button
              onClick={onEdit}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors shadow-md shadow-indigo-200 cursor-pointer"
            >
              {icons.edit} Edit Profile
            </button>
           </NavLink>
          )}
        </div>

        {/* Loading */}
        {loading && <SkeletonLoader />}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-6 py-5 text-sm font-medium">
            ⚠️ {error}
          </div>
        )}

        {/* Profile Data */}
        {!loading && !error && profile && (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="space-y-5">

              {/* Avatar Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 text-center">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${avatarColor} text-white flex items-center justify-center text-4xl font-bold mx-auto shadow-lg`}>
                  {profile.name?.charAt(0)?.toUpperCase()}
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-800">{profile.name}</h2>
                <p className="text-sm text-indigo-500 font-medium mt-1">{profile.role || "Role not added"}</p>
                {profile.location && (
                  <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                    {icons.location} {profile.location}
                  </p>
                )}

                {/* Profile Strength */}
                {(() => {
                  const fields = [
                    profile.name, profile.email, profile.phone, profile.location,
                    profile.role, profile.education, profile.experience, profile.about,
                    profile.github || profile.linkedin,
                    profile.skills?.length > 0 ? "yes" : "",
                  ];
                  const pct = Math.round((fields.filter(Boolean).length / fields.length) * 100);
                  return (
                    <div className="bg-indigo-50 rounded-2xl p-4 mt-5 text-left">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-semibold text-indigo-700">Profile Strength</span>
                        <span className="text-xs font-bold text-indigo-700">{pct}%</span>
                      </div>
                      <div className="w-full bg-indigo-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full transition-all duration-700"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="text-xs text-indigo-400 mt-2">
                        {pct < 50 ? "Aur details add karo recruiters ke liye." : pct < 80 ? "Accha hai! Thoda aur improve karo." : "Bahut accha! Recruiter-ready profile."}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Skills */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5">
                <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">
                  Skills <span className="text-indigo-400">{profile.skills?.length || 0}</span>
                </h3>
                {profile.skills?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-300">no skill added.</p>
                )}
              </div>

              {/* Links */}
              {(profile.github || profile.linkedin || profile.portfolio) && (
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5">
                  <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">Links</h3>
                  <div className="space-y-2.5">
                    {profile.github && (
                      <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                        {icons.github} <span className="truncate">{profile.github}</span>
                      </a>
                    )}
                    {profile.linkedin && (
                      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                        {icons.linkedin} <span className="truncate">{profile.linkedin}</span>
                      </a>
                    )}
                    {profile.portfolio && (
                      <a href={profile.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                        {icons.globe} <span className="truncate">{profile.portfolio}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2 space-y-5">

              {/* About */}
              {profile.about && (
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
                  <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">About</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{profile.about}</p>
                </div>
              )}

              {/* Contact Info */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-1">Contact & Details</h3>
                <InfoRow icon={icons.mail} label="Email" value={profile.email} />
                <InfoRow icon={icons.phone} label="Phone" value={profile.phone} />
                <InfoRow icon={icons.location} label="Location" value={profile.location} />
                <InfoRow icon={icons.education} label="Education" value={profile.education} />
                <InfoRow icon={icons.briefcase} label="Experience" value={profile.experience} />
                {profile.resume && (
                  <InfoRow icon={icons.resume} label="Resume" value={profile.resume} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetProfileUser;