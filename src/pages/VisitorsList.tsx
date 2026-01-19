import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type VisitorRow = {
  id: number;
  created_at: string;
  parent_name: string;
  child_name: string;
  mobilenumber: number;
  email_id: string;
};

const VisitorsList = () => {
  const [data, setData] = useState<VisitorRow[]>([]);
  const [filteredData, setFilteredData] = useState<VisitorRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Login State
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const authStatus = localStorage.getItem("honeyhive_auth");
    if (authStatus === "true") {
      setIsLoggedIn(true);
      fetchVisitors();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone === "7868000645" && pin === "1234") {
      localStorage.setItem("honeyhive_auth", "true");
      setIsLoggedIn(true);
      fetchVisitors();
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("honeyhive_auth");
    setIsLoggedIn(false);
  };

  const fetchVisitors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("honeyhive")
      .select("*")
      .order("created_at", { ascending: false });

    setLoading(false);
    if (error) {
      alert("Error: " + error.message);
      return;
    }
    setData(data || []);
    setFilteredData(data || []);
  };

  // Filter Logic
  useEffect(() => {
    const results = data.filter(visitor =>
      visitor.parent_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.child_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.mobilenumber.toString().includes(searchTerm)
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-400 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-b-8 border-[#4A2F1B]">
          <div className="text-center mb-8">
             <h1 className="text-3xl font-black text-[#4A2F1B]">HONEY HIVE</h1>
             <p className="text-sm font-bold text-yellow-600">MONTESSORI HOUSE</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" placeholder="Mobile Number" 
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 outline-none"
              value={phone} onChange={(e) => setPhone(e.target.value)}
            />
            <input 
              type="password" placeholder="4-Digit PIN" 
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 outline-none"
              value={pin} onChange={(e) => setPin(e.target.value)}
            />
            <button className="w-full bg-[#4A2F1B] text-white py-3 rounded-lg font-bold hover:bg-black transition">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-[#4A2F1B] text-white p-4 shadow-md flex justify-between items-center px-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">HONEY HIVE</h1>
          <p className="text-[10px] uppercase tracking-widest text-yellow-400">Montessori House</p>
        </div>
        <button onClick={handleLogout} className="bg-yellow-500 hover:bg-yellow-400 text-[#4A2F1B] px-4 py-1 rounded font-bold text-sm transition">
          Logout
        </button>
      </nav>

      <main className="p-4 md:p-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          
          {/* Toolbar */}
          <div className="p-4 bg-white border-b flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search by name or phone..." 
                className="w-full pl-4 pr-4 py-2 border rounded-full bg-gray-50 focus:ring-2 focus:ring-yellow-400 outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={fetchVisitors} 
              className="text-sm font-semibold text-[#4A2F1B] hover:underline"
            >
              {loading ? "Refreshing..." : "↻ Refresh List"}
            </button>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-[#4A2F1B] uppercase text-xs font-bold">
                <tr>
                  <th className="p-4 border-b">Parent Name</th>
                  <th className="p-4 border-b">Child Name</th>
                  <th className="p-4 border-b">Contact</th>
                  <th className="p-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredData.length > 0 ? (
                  filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-yellow-50 transition border-b">
                      <td className="p-4 font-medium">{row.parent_name}</td>
                      <td className="p-4 text-gray-600">{row.child_name}</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span>{row.mobilenumber}</span>
                          <span className="text-xs text-gray-400">{row.email_id}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-500">
                        {new Date(row.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-10 text-center text-gray-400">
                      {loading ? "Loading data..." : "No matching records found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VisitorsList;