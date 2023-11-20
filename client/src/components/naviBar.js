import React, { 
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { appContext } from '../hook/appContext';

import accOn from '../images/accIcon-on.png';
import accOff from '../images/accIcon-off.png';
import searchOn from '../images/searchIcon-on.png';
import searchOff from '../images/searchIcon-off.png';
import addOff from '../images/addIcon-off.png';
import addOn from '../images/addIcon-on.png';
import calIconOn from '../images/calIcon-on.png';
import calIconOff from '../images/calIcon-off.png';
import homeIconOff from '../images/homeIcon-off.png';
import homeIconOn from '../images/homeIcon-on.png';

import './stylesheets/naviBar.css'

const NaviBar = () => {
  const { homeBtn, setHomeBtn } = useContext(appContext);
  const { searchBtn, setSearchBtn } = useContext(appContext);
  const { addBtn, setAddBtn } = useContext(appContext);
  const { profileBtn, setProfileBtn } = useContext(appContext);
  const { calBtn, setCalBtn } = useContext(appContext);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const [ viewHeight, setViewHeight ] = useState("");

  /*
    height < 375px : 2vh
    height >  425px : 3vh
    height > 768px : 4vh
    */

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    if (windowWidth <= 424) {
      setViewHeight('2'); 
    } else if (windowWidth >= 768) {
      setViewHeight('4');
    } else {
      setViewHeight('3');
    };

    // console.log(windowWidth);

  }, [window.innerWidth]);

  return(
    <div id='naviBar-container'>
      <div id='naviBar-flex'>
        <div className='button-container'>
          <button 
            id='home-btn' 
            className='navi-btn' 
            style={{
              backgroundImage: `url(${!homeBtn ? homeIconOff : homeIconOn})`,
              height: `${viewHeight}vh`
            }}
            onClick={() => setHomeBtn(!homeBtn)} 
          />
        </div>
        <div className='button-container'>
          <button 
            id='search-btn' 
            className='navi-btn'
            style={{
              backgroundImage: `url(${!searchBtn ? searchOff : searchOn})`,
              height: `${viewHeight}vh`
            }}
            onClick={() => setSearchBtn(!searchBtn)} />
        </div>
        <div className='button-container'>
          <button 
            id='add-btn' 
            className='navi-btn'
            style={{
              backgroundImage: `url(${!addBtn ? addOff : addOn})`,
              height: `${viewHeight}vh`
          }}
            onClick={() => setAddBtn(!addBtn)}
          /> 
        </div>
        <div className='button-container'>
          <button 
            id='cal-btn' 
            className='navi-btn'
            style={{
              backgroundImage: `url(${!calBtn ? calIconOff : calIconOn})`,
              height: `${viewHeight}vh`
            }}
            onClick={() => setCalBtn(!calBtn)}  
          />
        </div>
        <div className='button-container'>
          <button 
            id='acc-btn' 
            className='navi-btn'
            style={{
              backgroundImage: `url(${!profileBtn ? accOff : accOn})`,
              height: `${viewHeight}vh`
            }}
            onClick={() => setProfileBtn(!profileBtn)} 
          />
        </div>

      </div>
    </div>
  )
};

export default NaviBar;