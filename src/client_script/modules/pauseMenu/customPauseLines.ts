//@ts-nocheck
const renderHandle = () => {
    if (!mp.game.ui.isPauseMenuActive())
        return;
    const firstLineText = ` `;
    const secondLineText = ` `;
    const thirdLineText = ` `;
    mp.game.graphics.beginScaleformMovieMethodOnFrontend("SET_HEADING_DETAILS");
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(firstLineText);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(secondLineText);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(thirdLineText);
    mp.game.graphics.scaleformMovieMethodAddParamBool(false);
    mp.game.graphics.endScaleformMovieMethod();
};

mp.events.add('render', renderHandle);

mp.events.add("playerReady", () => {
    mp.game.invoke("0xF314CF4F0211894E", 143, 94,86,248, 255);
    mp.game.invoke("0xF314CF4F0211894E", 116, 94,86,248, 255);
    mp.game.gxt.set("PM_PAUSE_HDR", "                                                              ~p~FUNNIX PROJECT");
  });