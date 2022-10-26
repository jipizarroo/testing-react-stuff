import React from "react";

const RenderCounter = () => {
    const reRenderCounter = React.useRef(0)
    reRenderCounter.current += 1
    console.log("Soy un component simple", reRenderCounter.current)
    return <></>
}

const Post = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const scrollListener = () => {
      const newPercentage = Math.floot(
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      );
      if (newPercentage !== progress) {
        setProgress(newPercentage);
      }
    };
    window.addEventListener('scroll', scrollListener, false)
    return () => {
        window.removeEventListener(scrollListener, false)
    }
  }, []);

  return (
    <>
    <h2 className="progress"> Progress: {progress}% </h2>
    <div className="content">
        <h1>CONTENT</h1>
        <RenderCounter />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores suscipit hic nostrum. Sequi eveniet dolore error minima debitis veniam eaque dolor explicabo natus pariatur excepturi aliquid, perferendis voluptate, sed rem!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim similique cum accusantium magni dicta repellat totam asperiores nemo sed fuga quas tempora, omnis animi esse quod, veritatis maxime excepturi?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi cupiditate iure animi explicabo ratione deserunt praesentium perferendis expedita earum? Tempore itaque qui harum laudantium quia laborum dicta perferendis ipsum aliquid!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error temporibus nemo magni sed, unde alias consequatur ipsam maiores architecto cum inventore veniam et eligendi impedit aspernatur incidunt. Minima, aut omnis?
        Consectetur ratione dolores libero optio distinctio dignissimos aliquam natus ipsam voluptas. Debitis corrupti nihil quasi vel, odit provident quibusdam incidunt esse eligendi aliquid dolores quia. Iure explicabo at corporis dicta!
        Eaque amet voluptatibus numquam non magni placeat quidem natus voluptatum fugit minus optio ad dolorem sint, porro fugiat mollitia veritatis quisquam ea adipisci deserunt beatae, quos sed! Aspernatur, cupiditate quas?
        Porro id excepturi natus distinctio animi, minus voluptatibus cupiditate et harum voluptatem! Sed facilis debitis molestias mollitia aliquid maxime ratione blanditiis. Maxime quod atque saepe amet enim? Eum, amet tempora!
        Harum molestias asperiores est quis. Dolores in sed culpa nesciunt, possimus unde nostrum consequuntur ut, corporis, temporibus eligendi voluptates obcaecati. Mollitia natus, in corporis nemo dolorem assumenda necessitatibus? Itaque, molestiae!</p>
    </div>
    </>
  )
};
