import DarkModeToggle from "../components/DarkModeToggle"

function Home() {
    return (
        <div className="">
           <h1 className="text-primary dark:text-text-dark ">Louis</h1>
           <p className="font-poppins" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum dolorum voluptates facilis aspernatur eveniet fuga voluptatum repellendus explicabo quos temporibus, doloremque numquam placeat cumque, beatae recusandae modi hic, expedita at.</p>
            <DarkModeToggle/>
        </div>
    )
}

export default Home