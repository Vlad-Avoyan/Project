import React from 'react'
import './Introduce.css'
import { Icon } from 'react-icons-kit'
import { music } from 'react-icons-kit/icomoon/music'
import { coffee } from 'react-icons-kit/fa/coffee'
import { ic_settings_voice } from 'react-icons-kit/md/ic_settings_voice'

const Table = () => {

    return (
        <div className="container">
            <div className="musicSet">
                <strong>Music Sets</strong>
            </div>
            <div className="globalStyle">
                <div className="parent1">
                    <div className="acousticSet">
                        <Icon style={{ color: '#626262' }} size={'20%'} icon={music} />
                        <h1>Acoustic Set</h1>
                        <div className="listSet">
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, laboriosam modi? </li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, iusto?</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque autem aut quasi quidem doloribus non recusandae quod voluptate enim facilis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="parent2">
                    <div className="smooth">
                        <Icon style={{ color: '#626262' }} size={'20%'} icon={coffee} />
                        <h1>Smooth Classic  Set</h1>
                        <div className="listSmooth">
                            <ul>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque explicabo consequuntur. Blanditiis necessitatibus eaque, numquam culpa unde doloremque, ullam voluptatem illo, officiis debitis esse magni exercitationem praesentium rerum tempora!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi inventore nulla cumque recusandae aliquam? Magnam quis cum placeat deleniti!</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="parent3">
                    <div className="NeilDimond">
                        <Icon style={{ color: '#626262' }} size={'20%'} icon={ic_settings_voice} />
                        <h1>Neil Diamond Songbook</h1>
                        <div className="listNeil">
                            <ul>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt rerum quod velit itaque ipsam. Amet alias sapiente modi fuga vitae!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus ipsum eaque at, debitis repudiandae.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table 