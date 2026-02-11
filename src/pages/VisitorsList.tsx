import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabaseClient";
import {
  LogOut,
  Search,
  RefreshCw,
  Download,
  User,
  FileSpreadsheet,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  Mail,
  MapPin,
  Baby,
  Users,
  Info,
  Trash2,
  Edit2,
  Check,
  ChevronRight as ArrowRight,
} from "lucide-react";

// --- FIX: IMPORT THE LOGO DIRECTLY ---
import logoImg from "../assets/logo.png";
import honeyLogo from "../assets/honey.png";
import { toast } from "sonner";

// --- Types ---
type VisitorRow = {
  id: number;
  created_at: string;
  date_of_enquiry: string;
  child_name: string;
  dob: string;
  age_years: string;
  age_months: string;
  gender: string;
  previous_school: string;
  languages_spoken: string;
  admission_sought_for: string;
  parent_name: string;
  relationship: string;
  phone_number: string;
  email_id: string;
  address: string;
  how_did_you_hear: string;
  interaction_done_by: string | null;
  remarks: string | null;
};

// --- Columns for CSV ---
const CSV_HEADERS: (keyof VisitorRow)[] = [
  "date_of_enquiry",
  "child_name",
  "dob",
  "age_years",
  "age_months",
  "gender",
  "admission_sought_for",
  "parent_name",
  "relationship",
  "phone_number",
  "email_id",
  "previous_school",
  "languages_spoken",
  "how_did_you_hear",
  "interaction_done_by",
  "remarks",
  "address",
];

const VisitorsList = () => {
  const [data, setData] = useState<VisitorRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState<VisitorRow | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ gender: "all", admission: "all" });

  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Remarks Editing State
  const [isEditingRemarks, setIsEditingRemarks] = useState(false);
  const [tempRemarks, setTempRemarks] = useState("");
  const [isUpdatingRemarks, setIsUpdatingRemarks] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("honeyhive_auth") === "true") {
      setIsLoggedIn(true);
      fetchVisitors();
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm.trim()), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const fetchVisitors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("honeyhive")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setData(data || []);
    setLoading(false);
  };

  const deleteEntry = async (id: number, name: string) => {
    if (
      window.confirm(`Are you sure you want to delete the enquiry for ${name}?`)
    ) {
      const { error } = await supabase.from("honeyhive").delete().eq("id", id);
      if (error) {
        toast.error("Error deleting entry: " + error.message);
      } else {
        toast.success("Entry deleted successfully");
        setData(data.filter((item) => item.id !== id));
        if (selectedVisitor?.id === id) setSelectedVisitor(null);
      }
    }
  };

  const handleUpdateRemarks = async () => {
    if (!selectedVisitor) return;

    setIsUpdatingRemarks(true);
    const { error } = await supabase
      .from("honeyhive")
      .update({ remarks: tempRemarks })
      .eq("id", selectedVisitor.id);

    if (error) {
      toast.error("Error updating remarks: " + error.message);
    } else {
      toast.success("Remarks updated successfully");
      // Update local state
      setData((prev) =>
        prev.map((item) =>
          item.id === selectedVisitor.id
            ? { ...item, remarks: tempRemarks }
            : item
        )
      );
      setSelectedVisitor((prev) =>
        prev ? { ...prev, remarks: tempRemarks } : null
      );
      setIsEditingRemarks(false);
    }
    setIsUpdatingRemarks(false);
  };

  // CSV Export Logic
  const handleExportCSV = () => {
    if (filteredData.length === 0) {
      toast.error("No records to export");
      return;
    }

    const headers = CSV_HEADERS.map((h) =>
      h.replace(/_/g, " ").toUpperCase()
    ).join(",");
    const rows = filteredData.map((v) =>
      CSV_HEADERS.map(
        (header) => `"${String(v[header] || "").replace(/"/g, '""')}"`
      ).join(",")
    );

    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `HoneyHive_Entries_${new Date().toLocaleDateString()}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredData = useMemo(() => {
    return data.filter((v) => {
      const q = debouncedSearch.toLowerCase();
      const matchesSearch =
        !q ||
        [v.child_name, v.parent_name, v.phone_number].some((f) =>
          f?.toLowerCase().includes(q)
        );
      const matchesGender =
        filters.gender === "all" || v.gender === filters.gender;
      const matchesAdmission =
        filters.admission === "all" ||
        v.admission_sought_for === filters.admission;
      return matchesSearch && matchesGender && matchesAdmission;
    });
  }, [data, debouncedSearch, filters]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, filters]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDFCF0] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-[3rem] shadow-2xl w-full max-w-md border border-yellow-100 flex flex-col items-center text-center">
          {/* LOGO IN LOGIN */}
          <div className="w-74 h-74 mb-6 flex items-center justify-center">
            <img
              src={honeyLogo}
              alt="Logo"
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.currentTarget.src =
                  "https://ui-avatars.com/api/?name=Honey+Hive&background=fbbf24";
              }}
            />
          </div>
          <h1 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-widest">
            Admin Login
          </h1>
          <form
            className="w-full space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (phone === "9952900051" && pin === "5577") {
                setIsLoggedIn(true);
                localStorage.setItem("honeyhive_auth", "true");
                fetchVisitors();
                toast.success("Welcome, Admin!");
              } else {
                toast.error("Invalid credentials");
              }
            }}
          >
            <input
              type="text"
              placeholder="Mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-slate-900">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-100 fixed h-full flex-col p-8">
        <div className="flex items-center gap-3 mb-12">
          {/* LOGO IN SIDEBAR */}
          <div className="w-50 h-50 flex items-center justify-center">
            <img
              src={honeyLogo}
              alt="Logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="font-black text-xl text-slate-800">HONEY HIVE</span>
        </div>
        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-5 py-4 bg-yellow-50 text-yellow-700 rounded-2xl font-bold text-sm">
            <User size={18} /> Enquiries
          </button>
          <button
            onClick={handleExportCSV}
            className="w-full flex items-center gap-3 px-5 py-4 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold text-sm"
          >
            <FileSpreadsheet size={18} /> Export CSV
          </button>
        </nav>
        <button
          onClick={() => {
            localStorage.clear();
            setIsLoggedIn(false);
          }}
          className="flex items-center gap-3 px-5 py-4 text-red-500 font-bold text-sm hover:bg-red-50 rounded-2xl transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      <main className="lg:ml-72 p-4 lg:p-10 max-w-6xl mx-auto pb-24">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Records ({filteredData.length})
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchVisitors}
              className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-slate-50"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />{" "}
              Refresh
            </button>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search child, parent or phone..."
              className="w-full pl-14 pr-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm text-slate-500 hover:text-yellow-600 hover:border-yellow-200 transition-all"
          >
            <Filter size={20} />
          </button>
        </div>

        {/* LIST VIEW */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1.5fr_1.2fr_1.2fr_auto] gap-4 px-8 py-5 bg-slate-50/50 border-b border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div>Child Name</div>
            <div>Grade</div>
            <div>Parent</div>
            <div>Phone</div>
            <div>Enquiry Date</div>
            <div className="text-right">Actions</div>
          </div>

          <div className="divide-y divide-slate-50">
            {currentItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVisitor(item)}
                className="group flex flex-col lg:grid lg:grid-cols-[2fr_1fr_1.5fr_1.2fr_1.2fr_auto] gap-4 px-6 lg:px-8 py-5 lg:items-center hover:bg-slate-50/80 transition-all cursor-pointer"
              >
                {/* Mobile & Desktop: Child Name + Gender */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-yellow-100 transition-colors shrink-0">
                    {item.gender?.toLowerCase() === "male" ? "👦" : "👧"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-black text-slate-800 text-sm lg:text-base truncate uppercase tracking-tight">
                      {item.child_name}
                    </h3>
                    <span className="lg:hidden text-yellow-600 text-[10px] font-black uppercase">
                      {item.admission_sought_for}
                    </span>
                  </div>
                </div>

                {/* Desktop: Grade */}
                <div className="hidden lg:block">
                  <span className="inline-flex px-2.5 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-[11px] font-black uppercase">
                    {item.admission_sought_for}
                  </span>
                </div>

                {/* Parent Info */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <div className="lg:hidden w-5 text-slate-300"><User size={14} /></div>
                  <span className="truncate">{item.parent_name}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <div className="lg:hidden w-5 text-slate-300"><Phone size={14} /></div>
                  <span className="tabular-nums whitespace-nowrap">{item.phone_number}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 lg:text-slate-500">
                  <div className="lg:hidden w-5 text-slate-300"><Calendar size={14} /></div>
                  <span className="whitespace-nowrap italic lg:not-italic">{item.date_of_enquiry}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-1 mt-2 lg:mt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteEntry(item.id, item.child_name);
                    }}
                    className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                  <button
                    className="p-2.5 text-slate-300 hover:text-yellow-600 lg:group-hover:translate-x-1 transition-all"
                    title="View Profile"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
            {currentItems.length === 0 && (
              <div className="p-20 text-center text-slate-400 font-bold">
                No matching records found.
              </div>
            )}
          </div>
        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-3 bg-white border border-slate-200 rounded-xl disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2 overflow-x-auto max-w-[200px] lg:max-w-none no-scrollbar">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`flex-shrink-0 w-10 h-10 rounded-xl font-black text-xs transition ${currentPage === i + 1
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-400 hover:bg-slate-50"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-3 bg-white border border-slate-200 rounded-xl disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </main>

      {/* MOBILE EXPORT FAB (Floating Action Button) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 lg:hidden z-50">
        <button
          onClick={handleExportCSV}
          className="w-14 h-14 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition border-4 border-white"
        >
          <FileSpreadsheet size={24} />
        </button>
      </div>

      {/* DETAIL DRAWER */}
      {selectedVisitor && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedVisitor(null)}
          />
          <div className="relative w-full max-w-xl bg-white h-full shadow-2xl animate-in slide-in-from-right overflow-y-auto">
            <div className="sticky top-0 bg-white/90 backdrop-blur-md p-6 border-b flex items-center justify-between z-10">
              <h2 className="text-xl font-black uppercase tracking-tight">
                Profile
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    deleteEntry(selectedVisitor.id, selectedVisitor.child_name)
                  }
                  className="p-3 text-red-500 hover:bg-red-50 rounded-2xl transition"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={() => {
                    setSelectedVisitor(null);
                    setIsEditingRemarks(false);
                  }}
                  className="p-3 bg-slate-100 rounded-2xl transition"
                >
                  <X />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-10">
              <div className="flex items-center gap-6 bg-yellow-50 p-6 rounded-[2.5rem]">
                <div className="text-5xl">
                  {selectedVisitor.gender?.toLowerCase() === "male"
                    ? "👦"
                    : "👧"}
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900 uppercase">
                    {selectedVisitor.child_name}
                  </h1>
                  <p className="font-bold text-yellow-700 text-xs">
                    ADMISSION SOUGHT: {selectedVisitor.admission_sought_for}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <DataGroup icon={<Baby size={18} />} title="Child Info">
                  <Item label="DOB" val={selectedVisitor.dob} />
                  <Item
                    label="Age"
                    val={`${selectedVisitor.age_years}Y ${selectedVisitor.age_months}M`}
                  />
                  <Item
                    label="Prev School"
                    val={selectedVisitor.previous_school}
                  />
                  <Item
                    label="Languages"
                    val={selectedVisitor.languages_spoken}
                  />
                </DataGroup>

                <DataGroup icon={<Users size={18} />} title="Parent Info">
                  <Item
                    label="Parent"
                    val={`${selectedVisitor.parent_name} (${selectedVisitor.relationship})`}
                  />
                  <Item
                    label="Phone"
                    val={selectedVisitor.phone_number}
                    isLink={`tel:${selectedVisitor.phone_number}`}
                  />
                  <Item
                    label="Email"
                    val={selectedVisitor.email_id}
                    isLink={`mailto:${selectedVisitor.email_id}`}
                  />
                  <Item label="Address" val={selectedVisitor.address} />
                </DataGroup>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="flex items-center gap-2 text-xs font-black uppercase text-slate-400">
                    <Info size={16} /> Remarks
                  </h4>
                  {!isEditingRemarks && (
                    <button
                      onClick={() => {
                        setTempRemarks(selectedVisitor.remarks || "");
                        setIsEditingRemarks(true);
                      }}
                      className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition"
                    >
                      <Edit2 size={16} />
                    </button>
                  )}
                </div>

                {isEditingRemarks ? (
                  <div className="space-y-3">
                    <textarea
                      value={tempRemarks}
                      onChange={(e) => setTempRemarks(e.target.value)}
                      className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-yellow-400 min-h-[100px]"
                      placeholder="Add remarks here..."
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setIsEditingRemarks(false)}
                        className="px-4 py-2 text-xs font-black uppercase text-slate-400 hover:text-slate-600"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdateRemarks}
                        disabled={isUpdatingRemarks}
                        className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-slate-900 rounded-xl text-xs font-black uppercase shadow-sm hover:bg-yellow-500 disabled:opacity-50"
                      >
                        {isUpdatingRemarks ? (
                          <RefreshCw size={14} className="animate-spin" />
                        ) : (
                          <Check size={14} />
                        )}
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm font-bold text-slate-700 italic leading-relaxed">
                    {selectedVisitor.remarks
                      ? `"${selectedVisitor.remarks}"`
                      : "No remarks provided."}
                  </p>
                )}
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                  <Item
                    label="Enquiry Date"
                    val={selectedVisitor.date_of_enquiry}
                  />
                  <Item label="Source" val={selectedVisitor.how_did_you_hear} />
                </div>
              </div>

              <a
                href={`tel:${selectedVisitor.phone_number}`}
                className="w-full flex items-center justify-center gap-3 p-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition"
              >
                <Phone size={20} /> Call Parent
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FILTER PANEL */}
      {showFilters && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          />
          <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black uppercase">Filters</h2>
              <button
                onClick={() => {
                  setFilters({ gender: "all", admission: "all" });
                  setShowFilters(false);
                }}
                className="text-[10px] font-black text-red-500 uppercase underline"
              >
                Clear
              </button>
            </div>
            <div className="space-y-6 mb-10">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">
                  Grade
                </label>
                <select
                  className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold"
                  value={filters.admission}
                  onChange={(e) =>
                    setFilters({ ...filters, admission: e.target.value })
                  }
                >
                  <option value="all">All Grades</option>
                  <option value="Pre-Kg">Pre-Kg</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">
                  Gender
                </label>
                <div className="flex gap-2">
                  {["all", "Male", "Female"].map((g) => (
                    <button
                      key={g}
                      onClick={() => setFilters({ ...filters, gender: g })}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black border transition ${filters.gender === g
                        ? "bg-yellow-400 border-yellow-400 text-slate-900"
                        : "bg-white text-slate-500 border-slate-200"
                        }`}
                    >
                      {g.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase shadow-lg"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Small Helpers ---
const DataGroup = ({ icon, title, children }: any) => (
  <div className="space-y-5">
    <h4 className="flex items-center gap-2 text-xs font-black uppercase text-slate-400 border-b border-slate-100 pb-2">
      {icon} {title}
    </h4>
    {children}
  </div>
);

const Item = ({ label, val, isLink }: any) => (
  <div className="flex flex-col">
    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
      {label}
    </span>
    {isLink ? (
      <a
        href={isLink}
        className="text-sm font-bold text-blue-600 underline truncate break-all"
      >
        {val || "-"}
      </a>
    ) : (
      <span className="text-sm font-bold text-slate-700">{val || "-"}</span>
    )}
  </div>
);

export default VisitorsList;
