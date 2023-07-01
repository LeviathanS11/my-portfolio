import image from '../assets/profile.jpg'

const About = () => {
    return (
        <div id="about" className="bg-gradient-to-r from-slate-200 via-white to-slate-200">
            <h1 className="text-center font-bold text-xl py-5">ABOUT ME</h1>
            <div className='flex flex-col md:flex-row justify-evenly items-center mx-60 gap-10'>
                <img className='rounded-full' style={{width:"300px",height:"300px"}} src={image} alt="" />
                <p className="text-justify  font-medium">Hello guys!!I am Shakiul Alam from Bangladesh.A junior Frontend Web Developer who is enthusiastic about creating dynamic web applications.I am a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app.I have skills on ReactJs,NodeJs,ExpressJs,Firebase,Javascript and MongoDb.Now I am learning <span>Nextjs.</span></p>
            </div>
            <hr className="mt-5 border-2" />
        </div>
        
    );
};

export default About;
 
 
