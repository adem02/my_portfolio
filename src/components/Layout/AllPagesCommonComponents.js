import React, { Fragment } from 'react'
import LogoComponent from '../../components/LogoComponent'
import SocialIcons from '../../components/SocialIcons'
import { useLocation } from 'react-router-dom'


const AllPagesCommonComponents = (props) => {

    const location = useLocation()

    return (
        <Fragment>
            <LogoComponent theme={props.theme} />
            {location.pathname === '/' ? null : <SocialIcons theme={props.theme} />}
        </Fragment>
    )
}

export default AllPagesCommonComponents