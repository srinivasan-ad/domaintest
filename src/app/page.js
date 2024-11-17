'use client'


export default function Home() {
  const text  = "This is a test to check whether website is hosted on domain or not !";
  const text2 = "Nevertheless welcome to the website :)"
  return (
    <div className="flex h-screen w-full bg-slate-300 items-center justify-center">
        {text}
        <br/>
        {text2}
     
    </div>
  );
}
