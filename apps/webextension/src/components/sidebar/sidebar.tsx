/* eslint-disable-next-line */
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import DoneIcon from '@mui/icons-material/Done';
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const copyToClipboard=()=>{
       const scheduleTitle=document.getElementById('title') as HTMLInputElement;
       const schedule=document.getElementById("events") as HTMLInputElement;    
       schedule?.select();
       schedule.setSelectionRange(0,9999);
       navigator.clipboard.writeText(schedule.value);
       alert("Copied the text:" + schedule.value)
  }
  return (
    <div className="font-inter bg-slate-50 flex flex-col p-5 max-w-sm rounded shadow-md">
      <div className="flex justify-end">
      <ClearIcon fontSize="large" className="text-white bg-red-600 rounded shadow-md cursor-pointer"/>
      </div>
      <div className="mb-2 mt-2">
         <h1 className="font-bold">Duration</h1>
         <p>30 min<ArrowDropDownIcon/></p>
      </div>
      <div className="mb-2 mt-2">
        <h1 className="font-bold">Event type <InfoSharpIcon className="text-blue-400 shadow-md rounded-full cursor-pointer"/></h1>
        <div className="flex justify-between mb-2 mt-2">
          <p className="font-bold">Share Slots</p>
          <ArrowDropDownIcon/>
        </div>
      </div>
      <div className="flex flex-col mt-2 mb-2">
        <div className="flex justify-between">
          <h1 className="font-bold">Save placeholders</h1>
          <DoneIcon className="text-white bg-blue-400 rounded font-bold shadow-md"/>
        </div>
        <textarea rows={2} id="title" className="text-xs rounded-lg mt-2 p-2 border-2 border-gray-300 mb-2 placeholder:text-xs" placeholder="Type Placeholder Name Here"></textarea>
        <textarea rows={7} id="events"  className="text-xs rounded-lg mt-2 p-2 border-2 border-gray-300 mb-2 placeholder:text-xs placeholder:m-2" placeholder="Start selecting availiabilites you would like to share on the calendar"></textarea>
      </div>
      <button onClick={copyToClipboard} className="border-2 border-blue-400 text-blue-400 rounded-md font-bold text-xl bg-white mt-2">Copy to Clipboard</button>
    </div>
  );
}

export default Sidebar;
