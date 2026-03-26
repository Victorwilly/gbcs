import React, { useState, useEffect } from 'react';
import { LuUser, LuBed, LuCircleCheck, LuClock, LuChevronRight, LuChevronLeft, LuPhone, LuFileText, LuShieldCheck } from 'react-icons/lu';

const HostelApplication = () => {
  // 1. Core States
  const [status, setStatus] = useState<'none' | 'pending' | 'approved'>('none');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    hostelBlock: '',
    roomType: '',
    medicalCondition: 'no',
    emergencyContact: '',
    emergencyPhone: '',
    specialNeeds:"",
    dietary:"",
    medicalDetails:"",
    gender:"",
    program:"",
    level:"",
    session:'',
    semester:"",
    emergencyAddress:"",
    emergencyName:"",
    relationship:"",
    finalAffirmation:false,
    noVisitors:false,
    cleanliness:false,
    noCooking:false,
    reportDamage:false,
    quietHours:false,

    agreedToRules: false
  });

  // 2. Fetch application status on load
  useEffect(() => {
      const fetchHostelStatus = async () => {
        try {
        const token = localStorage.getItem("token");
        const headers = { "Authorization": `Bearer ${token}` };

        // 1. Fetch THE USER first to get the latest read/deleted arrays
        const userRes = await fetch(`http://localhost:5000/api/users/me`, { headers });
        const userData = await userRes.json();
        if (userRes.ok) {
            setUser(userData); // Update the global/parent state
        }
        setLoading(false);
    } catch (err) {
      console.error("Fetch Error:", err);
      setLoading(false);
    }
    };
    fetchHostelStatus();
  }, [setUser]);

  // At the top of your component's return
if (loading) {
    return (
      <div className="p-8 bg-[#F8F9FA] min-h-screen flex items-center justify-center">
        <div className="text-gray-400 font-medium animate-pulse">
          Initializing hostel portal...
        </div>
      </div>
    );
  }
  
  // Add an extra check for the user object
  if (!user) {
    return <div className="p-8 text-red-500">Error: User session not found. Please log in again.</div>;
  }

  // --- SUB-COMPONENTS FOR DIFFERENT STATUSES ---

  // A. The Multi-Step Form (Desktop 39, 40, 41)
  const renderApplicationForm = () => (
    <div className="max-w-5xl">
      {/* Stepper Header */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-6">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          <div className={`absolute top-1/2 left-0 h-0.5 bg-[#D4AF37] -translate-y-1/2 z-0 transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }}></div>
          
          {[1, 2, 3].map((s) => (
            <div key={s} className="z-10 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step > s ? <LuCircleCheck size={20} /> : s}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${step >= s ? 'text-[#800020]' : 'text-gray-400'}`}>
                {s === 1 ? 'Personal Details' : s === 2 ? 'Preferences' : 'Agreement'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-yellow-50 text-[#D4AF37] rounded-xl"><LuUser size={24}/></div>
              <div>
                <h2 className="text-xl font-bold text-[#800020]">Personal & Academic Details</h2>
                <p className="text-xs text-gray-400">Confirm your student information</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <ReadOnlyField label="Full Name" value={user.name} setFormData={setFormData} />
               <ReadOnlyField label="Matric Number" value={user.matricNumber} setFormData={setFormData} />
               <SelectField label="Level" optionsList={[{'title':'Select Program','value':''},{'title':'Theology','value':'Theology'},{'title':'Divinity & Ministry','value':'Divinity'}]} value={user.program} setFormData={setFormData} />
               <SelectField label="Level" optionsList={[{'title':'Select Level','value':''},{'title':'100 level','value':'100'},{'title':'200 Level','value':'200'},{'title':'300 Level','value':'300'},{'title':'400 Level','value':'400'}]} value={user.level} setFormData={setFormData} />
               <ReadOnlyField label="Acedemic Session" value={user.session} setFormData={setFormData} />
               <SelectField label="Semester" optionsList={[{'title':'Select Semester','value':''},{'title':'1st Semester','value':'1st Semester'},{'title':'2nd Semester','value':'2nd Semester'},{'title':'3rd Semester','value':'3rd Semester'},{'title':'4th Semester','value':'4th Semester'}]} setFormData={setFormData} />
               
            </div>
            <div className="mt-4">
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-3 ml-1">
                Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                <GenderCard 
                    title="Male" 
                    active={formData.gender === 'male'} 
                    onClick={() => setFormData({...formData, gender: 'male'})} 
                />
                <GenderCard 
                    title="Female" 
                    active={formData.gender === 'female'} 
                    onClick={() => setFormData({...formData, gender: 'female'})} 
                />
                </div>
                </div>
          </div>
        )}

{step === 2 && (
  <div className="space-y-8 animate-fadeIn">
    {/* Section 1: Hostel Selection */}
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-red-50 text-[#800020] rounded-lg"><LuBed size={20}/></div>
        <div>
          <h2 className="text-lg font-bold text-[#800020]">Hostel Preferences</h2>
          <p className="text-[10px] text-gray-400">Choose your preferred accommodation</p>
        </div>
      </div>

      <SelectField 
        label="Preferred Hostel Block" 
        name="hostelBlock"
        value={formData.hostelBlock}
        optionsList={[{value: 'male_a', title: 'Male Hostel A'}, {value: 'female_a', title: 'Female Hostel A'}]}
        setFormData={setFormData}
      />

      <div className="space-y-3">
        <label className="block text-[10px] font-bold text-gray-400 uppercase ml-1">Room Type <span className="text-red-500">*</span></label>
        <div className="flex gap-4">
          <RoomCard 
            type="Shared Room" 
            persons="4" 
            price={15000} 
            active={formData.roomType === 'shared'} 
            onClick={() => setFormData({...formData, roomType: 'shared'})} 
          />
          <RoomCard 
            type="Double Room" 
            persons="2" 
            price={25000} 
            active={formData.roomType === 'double'} 
            onClick={() => setFormData({...formData, roomType: 'double'})} 
          />
        </div>
      </div>
    </div>

    {/* Section 2: Health & Requirements */}
    <div className="pt-6 border-t border-gray-100 space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-green-50 text-green-600 rounded-lg"><LuShieldCheck size={20}/></div>
        <div>
          <h2 className="text-lg font-bold text-[#800020]">Health & Requirements</h2>
          <p className="text-[10px] text-gray-400">Help us accommodate your needs</p>
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-[12px] ml-1">Do you have any medical conditions?</label>
        <div className="flex gap-4 max-w-md">
          <ToggleCard title="yes" active={formData.medicalCondition === 'yes'} onClick={() => setFormData({...formData, medicalCondition: 'yes'})} />
          <ToggleCard title="no" active={formData.medicalCondition === 'no'} onClick={() => setFormData({...formData, medicalCondition: 'no'})} />
        </div>
      </div>

      {/* Conditional Text Area for Medical Details */}
      {formData.medicalCondition === 'yes' && (
        <div className="space-y-2">
          <label className="block text-[10px] font-bold text-gray-400 uppercase ml-1">Medical Condition Details <span className="text-red-500">*</span></label>
          <textarea 
            className="w-full border border-gray-200 rounded-2xl p-4 text-sm min-h-[100px] outline-none focus:border-[#D4AF37]"
            placeholder="Describe your condition and any accommodations needed..."
            value={formData.medicalDetails}
            onChange={(e) => setFormData({...formData, medicalDetails: e.target.value})}
          />
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-[10px] font-bold text-gray-400 uppercase ml-1">Special Requirements or Needs (Optional)</label>
        <textarea 
          className="w-full border border-gray-200 rounded-2xl p-4 text-sm min-h-[80px] outline-none focus:border-[#D4AF37]"
          placeholder="Any disability or special accommodation needs..."
          value={formData.specialNeeds}
          onChange={(e) => setFormData({...formData, specialNeeds: e.target.value})}
        />
      </div>

      <SelectField 
        label="Dietary Requirements" 
        name="dietary"
        value={formData.dietary}
        optionsList={[{value: 'none', title: 'None'}, {value: 'vegetarian', title: 'Vegetarian'}]}
        setFormData={setFormData}
      />
    </div>
  </div>
)}

{step === 3 && (
  <div className="space-y-10 animate-fadeIn">
    {/* Section 1: Emergency Contact */}
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-pink-50 text-pink-600 rounded-lg"><LuPhone size={20}/></div>
        <div>
          <h2 className="text-lg font-bold text-[#800020]">Emergency Contact</h2>
          <p className="text-[10px] text-gray-400">Who should we contact in an emergency?</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <InputField 
          label="Full Name" 
          placeholder="Parent / Guardian name"
          name="emergencyName"
          value={formData.emergencyName}
          setFormData={setFormData}
          required
        />
        <SelectField 
          label="Relationship" 
          name="relationship"
          value={formData.relationship}
          optionsList={[
            {value: 'parent', title: 'Parent'}, 
            {value: 'guardian', title: 'Guardian'},
            {value: 'sibling', title: 'Sibling'}
          ]}
          setFormData={setFormData}
          required
        />
        <InputField 
          label="Phone Number" 
          placeholder="080XXXXXXXX"
          name="emergencyPhone"
          value={formData.emergencyPhone}
          setFormData={setFormData}
          required
        />
        <InputField 
          label="Address" 
          placeholder="Full residential address"
          name="emergencyAddress"
          value={formData.emergencyAddress}
          setFormData={setFormData}
          required
        />
      </div>
    </div>

    {/* Section 2: Hostel Rules Agreement */}
    <div className="space-y-6 pt-6 border-t border-gray-100">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-yellow-50 text-[#D4AF37] rounded-lg"><LuFileText size={20}/></div>
        <div>
          <h2 className="text-lg font-bold text-[#800020]">Hostel Rules Agreement</h2>
          <p className="text-[10px] text-gray-400">You must agree to all rules to proceed</p>
        </div>
      </div>

      <div className="bg-[#FFF9EA] p-6 rounded-2xl border border-yellow-100/50 space-y-4">
        <RuleCheckbox 
          label="I will maintain cleanliness in my room and common areas" 
          checked={formData.cleanliness}
          onChange={(val: boolean) => setFormData({...formData, cleanliness: val})}
        />
        <RuleCheckbox 
          label="I will respect quiet hours (10 PM – 6 AM)" 
          checked={formData.quietHours}
          onChange={(val: boolean) => setFormData({...formData, quietHours: val})}
        />
        <RuleCheckbox 
          label="I understand no visitors are allowed after 8 PM" 
          checked={formData.noVisitors}
          onChange={(val: boolean) => setFormData({...formData, noVisitors: val})}
        />
        <RuleCheckbox 
          label="I will report any damages or maintenance issues immediately" 
          checked={formData.reportDamage}
          onChange={(val: boolean) => setFormData({...formData, reportDamage: val})}
        />
        <RuleCheckbox 
          label="I will not cook in my room (use designated kitchen areas)" 
          checked={formData.noCooking}
          onChange={(val: boolean) => setFormData({...formData, noCooking: val})}
        />
      </div>

      {/* Final Affirmation Box */}
      <div className="p-6 rounded-2xl border-2 border-[#800020]/10 bg-[#800020]/5">
        <label className="flex items-start gap-4 cursor-pointer">
          <input 
            type="checkbox" 
            className="mt-1 accent-[#800020] w-4 h-4"
            checked={formData.finalAffirmation}
            onChange={(e) => setFormData({...formData, finalAffirmation: e.target.checked})}
          />
          <span className="text-xs font-bold text-[#800020] leading-relaxed">
            I affirm that all information provided is accurate and I agree to abide by all hostel rules and regulations of Grace Bible Institute & Seminary.
          </span>
        </label>
      </div>
    </div>
  </div>
)}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-50">
          <button 
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-gray-400 hover:bg-gray-50 disabled:opacity-0"
          >
            <LuChevronLeft /> Previous
          </button>
          <button 
            onClick={() => step < 3 ? setStep(step + 1) : setStatus('pending')}
            className="flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#b8962e]"
          >
            {step === 3 ? 'Submit Application' : 'Next Step'} <LuChevronRight />
          </button>
        </div>
      </div>
    </div>
  );

  // B. Pending Review (Desktop 42)
  const renderPendingStatus = () => (
    <div className="max-w-4xl space-y-6">
      <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex items-center gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
          <LuClock size={32} className="animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Application Pending Review</h2>
          <p className="text-sm text-gray-500">Your request is being processed by the Student Affairs department.</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-[#800020] mb-4">Application History</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
           <LuCircleCheck className="text-green-500" />
           <span>Application Submitted on {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );

  // C. Approved View (Desktop 18)
  const renderApprovedStatus = () => (
    <div className="max-w-5xl space-y-6">
      <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-center gap-4">
        <LuCircleCheck className="text-green-500" size={24} />
        <span className="font-bold text-green-800">Application Approved - Room Allocated</span>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
           <h3 className="font-bold text-gray-800 mb-6">Room Allocation Details</h3>
           <div className="space-y-4">
             <DetailRow label="Hostel" value="Male Hostel A" />
             <DetailRow label="Room Number" value="101" />
             <DetailRow label="Room Type" value="Shared (4 persons)" />
           </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
           <h3 className="font-bold text-gray-800 mb-4 text-sm">Hostel Rules</h3>
           <ul className="text-xs text-gray-500 space-y-3">
             {['Respect quiet hours', 'No visitors after 8pm', 'Maintain cleanliness'].map(r => (
               <li key={r} className="flex gap-2 items-center"><LuCircleCheck className="text-green-500" size={14}/> {r}</li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Hostel Application</h1>
        <p className="text-sm text-gray-500">Apply for on-campus accommodation</p>
      </div>

      {status === 'none' && renderApplicationForm()}
      {status === 'pending' && renderPendingStatus()}
      {status === 'approved' && renderApprovedStatus()}
    </div>
  );
};

const ReadOnlyField = ({ label, value, name, setFormData }: any) => (
    <div className="flex-1">
      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">{label}</label>
      <input 
        type="text"
        value={value} 
        // This allows the user to still "type" if you want it editable, 
        // or keeps it synced if value comes from state
        onChange={(e) => setFormData((prev: any) => ({ ...prev, [name]: e.target.value }))}
        className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm font-medium text-gray-500 outline-none"
      />
    </div>
  );
  
  const SelectField = ({ label, value, name, optionsList, setFormData }: any) => (
    <div className="flex-1">
      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">{label}</label>
      <div className="relative">
        <select 
          value={value}
          // Updates the specific key in formData based on the 'name' prop
          onChange={(e) => setFormData((prev: any) => ({ ...prev, [name]: e.target.value }))}
          className="w-full bg-white border border-gray-200 p-4 rounded-xl text-sm font-medium text-gray-700 outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer"
        >
          <option value="">Select {label}</option>
          {optionsList?.map((opt: any, index: number) => (
            <option key={index} value={opt.value}>{opt.title}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
          <LuChevronRight className="rotate-90" size={14} />
        </div>
      </div>
    </div>
  );

  const GenderCard = ({ title, active, onClick }: any) => (
    <div 
      onClick={onClick}
      className={`flex-1 p-5 rounded-[.5rem] border-2 cursor-pointer transition-all flex items-center gap-4 ${
        active ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      {/* Custom Radio Circle */}
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
        active ? 'border-[#D4AF37]' : 'border-gray-300'
      }`}>
        {active && <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />}
      </div>
      <span className={`font-bold text-sm ${active ? 'text-gray-800' : 'text-gray-500'}`}>
        {title}
      </span>
    </div>
  );

const DetailRow = ({ label, value }: any) => (
  <div className="flex justify-between py-2 border-b border-gray-50 last:border-0">
    <span className="text-sm text-gray-400">{label}</span>
    <span className="text-sm font-bold text-gray-800">{value}</span>
  </div>
);

const SelectionCard = ({ title, price, desc, active, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${active ? 'border-[#D4AF37] bg-yellow-50/30' : 'border-gray-100 bg-white hover:border-gray-200'}`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${active ? 'border-[#D4AF37]' : 'border-gray-200'}`}>
        {active && <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />}
      </div>
      <LuBed className={active ? 'text-[#D4AF37]' : 'text-gray-300'} />
    </div>
    <h4 className="font-bold text-gray-800">{title}</h4>
    <p className="text-xs text-gray-400 mb-2">{desc}</p>
    <p className="text-lg font-black text-[#800020]">{price}<span className="text-[10px] font-medium text-gray-400"> / semester</span></p>
  </div>
);

// Room Type Card Component
const RoomCard = ({ type, persons, price, active, onClick }: any) => (
    <div 
      onClick={onClick}
      className={`flex-1 p-6 rounded-2xl border-2 cursor-pointer transition-all relative ${
        active ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 rounded-xl ${active ? 'bg-[#D4AF37] text-white' : 'bg-gray-50 text-gray-400'}`}>
          <LuBed size={24} />
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${active ? 'border-[#D4AF37]' : 'border-gray-200'}`}>
          {active && <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />}
        </div>
      </div>
      <h4 className="font-bold text-gray-800">{type}</h4>
      <p className="text-xs text-gray-400 mb-4">{persons} Persons</p>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-black text-[#800020]">₦{price.toLocaleString()}</span>
        <span className="text-[10px] text-gray-400">/semester</span>
      </div>
    </div>
  );
  
  // Selection Toggle (Yes/No)
  const ToggleCard = ({ title, active, onClick }: any) => (
    <div 
      onClick={onClick}
      className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
        active ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-gray-100 bg-white'
      }`}
    >
      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? 'border-[#D4AF37]' : 'border-gray-300'}`}>
        {active && <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />}
      </div>
      <span className={`text-sm font-bold ${active ? 'text-gray-800' : 'text-gray-500'}`}>{title}</span>
    </div>
  );

  // Custom Checkbox for Rules
const RuleCheckbox = ({ label, checked, onChange }: any) => (
    <label className="flex items-center gap-4 p-2 cursor-pointer group">
      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
        checked ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-gray-300 group-hover:border-[#D4AF37]'
      }`}>
        {checked && <LuCircleCheck size={14} className="text-white" />}
      </div>
      <input 
        type="checkbox" 
        className="hidden" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
      />
      <span className="text-sm text-gray-600 font-medium">{label}</span>
    </label>
  );
  
  // Standard Input for Contact Details
  const InputField = ({ label, placeholder, name, value, setFormData, required = false }: any) => (
    <div className="flex-1">
      <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setFormData((prev: any) => ({ ...prev, [name]: e.target.value }))}
        className="w-full bg-white border border-gray-200 p-4 rounded-xl text-sm font-medium text-gray-700 outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-300"
      />
    </div>
  );

export default HostelApplication;