import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Jeff Bezos",
      title: "CEO of Amazon",
      img:
        "https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Javier worked with us for a few months as he found an invulnerability in the Amazon page itself",
    },
    {
      id: 2,
      name: "Elon Musk",
      title: "CEO of Tesla",
      img:
        "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Insert text here.",
      featured: true,
    },
    {
      id: 3,
      name: "Emmett Shear",
      title: "CEO of Twitch",
      img:
        "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Insert text here.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
