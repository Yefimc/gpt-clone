const sidebar = () => {
  const items = ["Def not cheating", "School work", "Math Homework", "some other cool"]
  return (
    <div className="sidebar">
      <button type="button" className="btn newChatButton">
        <img
          className="gptlogo"
          src="https://files.raycast.com/g7iom6r6tfgmq9iqm3l0ih4rq6lw"
        ></img>
        New chat
        <img
          className="gptwritelogo"
          src="https://i.imgur.com/lTSeeOU.png"
        ></img>
      </button>

      <ul className="activity list-group">
        <li className="activity-item dateText list-group-item">Today</li>
        {
          items.map(item => (
            <li className="activity-item list-group-item">{item}</li>
          ))
        }
      </ul>
      <div className="bottomBtns">

        <button type="button" className="btn upgradeButton">
          <img
            className="gptstarlogo"
            src="https://i.imgur.com/uZiwq5k.png"
          ></img>
          <div className="upgradeDiv">
            <span>Upgrade plan</span>
            <span className='subtext'>Get GPT-4, DALLE, and more</span>
          </div>
        </button>
        <button type="button" className="btn nameBtn">
            <img
            className="gptpfpimg"
            src="https://i.imgur.com/AEgGIuA.png"
          ></img>
          <span id='username'>Yefi K</span>
        </button>
      </div>
    </div>
  );
};

export default sidebar;
