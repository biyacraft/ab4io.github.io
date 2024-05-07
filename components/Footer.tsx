import Link from "next/link";


export default function Footer(){
    return(
        <div className="py-10  text-center text-sm">
            <hr />
            <p className="">
                The{" "}<Link
                href="#"
                target="_blank"
                className="underline-offset-2 hover:text-emerald-500 hover:underline">
                    ab4i40
                </Link>{" "}Blog{" "} {" "}    
                <Link 
                href="https://drive.google.com/file/d/10ZnQoXCbRWS5BB0jU8TPq-AWZEBslLij/view?usp=sharing"
                className="underline-offset-2 hover:text-emerald-500 hover:underline"
                target="_blank">
                   {" "} Download CV</Link>
            </p>
            
            
        </div>
    )
}