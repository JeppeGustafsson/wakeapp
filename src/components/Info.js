import Style from '../components/Info.module.css';
import TopNav from './TopNav';
import logo from '../content/images/clock.png';


const Info = (props) => {

    return (
        <div className={Style.Info}>
            <TopNav />
            <section>
                <h3>Info</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia, lorem in placerat imperdiet, arcu velit tincidunt magna, ac sagittis tortor lectus ullamcorper diam. Etiam lacinia, erat porttitor faucibus vulputate, ex turpis placerat diam, eu finibus quam enim a odio. Nunc ultricies posuere dolor sit amet vestibulum. Nam ex dui, egestas id lobortis et, vehicula eu tellus. Phasellus rutrum, eros id ultrices commodo, </p>
            </section >
            <img src={logo} className={Style.Logo} />
        </div>

    )
};

export default Info;