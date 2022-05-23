import React from 'react'
import { Backend, Cloud, Frontend, Langage, Mobile, Tools } from '../../utilities/AllSVGs';

const DisplaySkillsIcon = ({ skillLabel, index, fill }) => {

    const pickRightIcon = () => {
        let icon = null;

        switch (skillLabel) {
            case 'langages':
                icon = <Langage width={30} height={30} fill={fill} />;
                break;
            case 'backend':
                icon = <Backend width={30} height={30} fill={fill} />;
                break;
            case 'frontend':
                icon = <Frontend width={30} height={30} fill={fill} />;
                break;
            case 'mobile':
                icon = <Mobile width={30} height={30} fill={fill} />;
                break;
            case 'tools':
                icon = <Tools width={30} height={30} fill={fill} />;
                break;
            case 'cloud':
                icon = <Cloud width={30} height={30} fill={fill} />;
                break;
            default:
                break;
        }

        return icon;
    }
    return (
        <div>
            {pickRightIcon()}
        </div>
    )
}

export default DisplaySkillsIcon