import { useState, useEffect } from "react";

const icons = {
  user: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
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
  plus: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  close: (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
  upload: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
  back: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  ),
};

const Toast = ({ message, type, onClose }) => (
  <div
    className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl transition-all duration-300 ${
      type === "success" ? "bg-emerald-600 text-white" : "bg-red-500 text-white"
    }`}
    style={{ minWidth: 280 }}
  >
    <span className={`flex items-center justify-center w-7 h-7 rounded-full ${type === "success" ? "bg-emerald-500" : "bg-red-400"}`}>
      {icons.check}
    </span>
    <div>
      <p className="font-semibold text-sm">{type === "success" ? "Profile Updated!" : "Error"}</p>
      <p className="text-xs opacity-90 mt-0.5">{message}</p>
    </div>
    <button onClick={onClose} className="ml-auto opacity-70 hover:opacity-100">{icons.close}</button>
  </div>
);

const InputField = ({ label, name, value, onChange, placeholder, type = "text", icon }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
      {icon && <span className="text-indigo-400">{icon}</span>} {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-slate-50 hover:bg-white"
    />
  </div>
);

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-5 max-w-5xl mx-auto">
    <div className="h-10 w-48 bg-slate-200 rounded-2xl" />
    <div className="bg-white rounded-3xl p-6 space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-12 bg-slate-100 rounded-xl" />
      ))}
    </div>
  </div>
);

const EditProfile = ({ userId, onBack }) => {

  const [profile, setProfile] = useState({
    name: "", email: "", phone: "", location: "",
    role: "", education: "", experience: "", about: "",
    github: "", linkedin: "", portfolio: "", resume: "",
  });

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [toast, setToast] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");

  // Pehle existing data fetch karo
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/user/mainProfile`, {
          credentials:"include",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const data = await res.json();
        if (res.ok && data.success) {
          const d = data.data;
          setProfile({
            name: d.name || "",
            email: d.email || "",
            phone: d.phone || "",
            location: d.location || "",
            role: d.role || "",
            education: d.education || "",
            experience: d.experience || "",
            about: d.about || "",
            github: d.github || "",
            linkedin: d.linkedin || "",
            portfolio: d.portfolio || "",
            resume: d.resume || "",
          });
          setSkills(d.skills || []);
          setResumeName(d.resume || "");
        }
      } catch (err) {
        showToast("Profile load nahi hua.", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;
    if (skills.map((s) => s.toLowerCase()).includes(trimmed.toLowerCase())) {
      showToast("Skill already added.", "error");
      return;
    }
    setSkills([...skills, trimmed]);
    setSkillInput("");
  };

  const removeSkill = (i) => setSkills(skills.filter((_, idx) => idx !== i));

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setResumeName(file.name);
  };

  // ✅ PATCH API call
  const handleUpdate = async () => {
    if (!profile.name.trim() || !profile.email.trim() || !profile.about || !profile.education || !profile.experience || !profile.github || !profile.location || !profile.portfolio || !profile.linkedin || !profile.resume || !profile.role || !profile.phone ) {
      showToast("Name aur email required.", "error");
      return;
    }
    setSaving(true);
    try {
      console.log(profile);
console.log(skills);

console.log({
  ...profile,
  resume: resumeName,
  skills,
});
      const response = await fetch(`http://localhost:5000/user/mainProfile/update/`, {
        method: "PATCH",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...profile,
          resume: resumeName,
          skills: skills,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        showToast("Profile successfully update ho gaya!", "success");
      } else {
        showToast(data.message || "Update nahi hua.", "error");
      }
    } catch (err) {
      showToast("Network error. Try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  const avatarColors = ["from-indigo-500 to-violet-600", "from-emerald-500 to-teal-600", "from-orange-500 to-rose-500"];
  const avatarColor = profile.name ? avatarColors[profile.name.charCodeAt(0) % avatarColors.length] : avatarColors[0];
  const tabs = [{ id: "personal", label: "Personal" }, { id: "career", label: "Career" }, { id: "links", label: "Links" }];

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-50 py-8 px-4">
      <SkeletonLoader />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-50 py-8 px-4">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Edit Profile</h1>
              <p className="text-sm text-slate-400">Apni details update karo</p>
            </div>
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors"
            >
              {icons.back} Back
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT — Live Preview */}
          <div className="space-y-5">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 text-center">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${avatarColor} text-white flex items-center justify-center text-3xl font-bold mx-auto shadow-lg`}>
                {profile.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
              <h2 className="mt-3 text-lg font-bold text-slate-800">{profile.name || "Aapka Naam"}</h2>
              <p className="text-sm text-indigo-500 font-medium mt-1">{profile.role || "Role add karo"}</p>
              {profile.location && (
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
                  {icons.location} {profile.location}
                </p>
              )}
              <div className="bg-indigo-50 rounded-2xl p-4 mt-4 text-left">
                <p className="text-xs font-semibold text-indigo-700 mb-1">Live Preview</p>
                <p className="text-xs text-indigo-400">Form fill karo, yahan dikhai dega.</p>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5">
              <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">
                Skills <span className="text-indigo-400">{skills.length}</span>
              </h3>
              {skills.length === 0 ? (
                <p className="text-sm text-slate-300">Koi skill nahi.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
                      {s}
                      <button onClick={() => removeSkill(i)} className="opacity-40 hover:opacity-100">{icons.close}</button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Links Preview */}
            {(profile.github || profile.linkedin || profile.portfolio) && (
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5">
                <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">Links</h3>
                <div className="space-y-2">
                  {profile.github && <p className="flex items-center gap-2 text-xs text-slate-500">{icons.github}<span className="truncate">{profile.github}</span></p>}
                  {profile.linkedin && <p className="flex items-center gap-2 text-xs text-slate-500">{icons.linkedin}<span className="truncate">{profile.linkedin}</span></p>}
                  {profile.portfolio && <p className="flex items-center gap-2 text-xs text-slate-500">{icons.globe}<span className="truncate">{profile.portfolio}</span></p>}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-2 space-y-5">

            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-2 flex gap-1">
              {tabs.map((t) => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`flex-1 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${activeTab === t.id ? "bg-indigo-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-7">

              {/* Personal Tab */}
              {activeTab === "personal" && (
                <div className="space-y-5">
                  <h3 className="font-bold text-slate-700 text-base">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Full Name *" name="name" value={profile.name} onChange={handleChange} placeholder="Gaurav Kumar" icon={icons.user} />
                    <InputField label="Email *" name="email" value={profile.email} onChange={handleChange} placeholder="you@email.com" type="email" icon={icons.mail} />
                    <InputField label="Phone" name="phone" value={profile.phone} onChange={handleChange} placeholder="+91 98765 43210" icon={icons.phone} />
                    <InputField label="Location" name="location" value={profile.location} onChange={handleChange} placeholder="Mumbai, India" icon={icons.location} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">About You</label>
                    <textarea name="about" value={profile.about} onChange={handleChange} rows={5}
                      placeholder="Apne baare mein likho..."
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-slate-50 hover:bg-white resize-none" />
                  </div>
                </div>
              )}

              {/* Career Tab */}
              {activeTab === "career" && (
                <div className="space-y-5">
                  <h3 className="font-bold text-slate-700 text-base">Career Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputField label="Current Role" name="role" value={profile.role} onChange={handleChange} placeholder="Frontend Developer" icon={icons.briefcase} />
                    <InputField label="Experience" name="experience" value={profile.experience} onChange={handleChange} placeholder="3 years" icon={icons.briefcase} />
                    <InputField label="Education" name="education" value={profile.education} onChange={handleChange} placeholder="B.Tech, CS" icon={icons.education} />
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">Skills</label>
                    <div className="flex gap-3">
                      <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addSkill()}
                        placeholder="e.g. React, Node.js"
                        className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-slate-50 hover:bg-white flex-1" />
                      <button onClick={addSkill} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 rounded-xl flex items-center gap-2 text-sm font-semibold transition-colors">
                        {icons.plus} Add
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">Enter dabao ya Add click karo.</p>
                    {skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {skills.map((s, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
                            {s}
                            <button onClick={() => removeSkill(i)} className="opacity-40 hover:opacity-100">{icons.close}</button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Resume */}
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">Resume / CV</label>
                    <label className={`flex items-center gap-3 border-2 border-dashed rounded-2xl px-5 py-5 cursor-pointer transition-all ${resumeName ? "border-indigo-400 bg-indigo-50" : "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50/50"}`}>
                      <span className={resumeName ? "text-indigo-500" : "text-slate-400"}>{icons.upload}</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-600">{resumeName || "Resume upload karo"}</p>
                        <p className="text-xs text-slate-400 mt-0.5">PDF, DOC ya DOCX — max 5MB</p>
                      </div>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
                    </label>
                  </div>
                </div>
              )}

              {/* Links Tab */}
              {activeTab === "links" && (
                <div className="space-y-5">
                  <h3 className="font-bold text-slate-700 text-base">Online Presence</h3>
                  <p className="text-sm text-slate-400 -mt-2">Recruiters ke liye links add karo.</p>
                  <div className="space-y-4">
                    {[
                      { name: "github", icon: icons.github, label: "GitHub", placeholder: "https://github.com/username" },
                      { name: "linkedin", icon: icons.linkedin, label: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
                      { name: "portfolio", icon: icons.globe, label: "Portfolio", placeholder: "https://yourportfolio.com" },
                    ].map((field) => (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">{field.icon} {field.label}</label>
                        <input name={field.name} value={profile[field.name]} onChange={handleChange} placeholder={field.placeholder}
                          className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition bg-slate-50 hover:bg-white" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Update Button */}
            <button onClick={handleUpdate} disabled={saving}
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold text-base transition-all duration-200 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
              {saving ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Updating...
                </>
              ) : (
                <>{icons.check} Update Profile</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;