
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
   <img src={parts} className="w-5/12 rounded-lg shadow-2xl absolute right-5 -bottom-20 border-8 " />
   </div>
    <div className='lg:w-1/2'>
      <h1 className="text-xl font-semibold text-[#FF3811]">About Us</h1>
      <p className="py-6 text-5xl text-black font-bold">We are qualified <br /> & of experience <br /> in this field</p>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p> <br />
      <p >the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p> <br />
      <button className="btn  bg-[#FF3811]">Get More Info </button>
    </div>
  </div>
</div>
    );
};

export default About;