import React from 'react'

import { Icon, Button, SideNav, SideNavItem } from 'react-materialize'

export default function SideComponent() {
    return (
        <>
            <SideNav
                id="SideNav-10"
                options={{
                    draggable: true,
                    edge: "right"
                }}
                trigger={
                    <Button
                        className="btn-large green notesBtn"
                        floating
                        icon={<Icon className="fontSize">Notes</Icon>}
                        node="button"
                    />
                }
            >
                <SideNavItem
                    user={{
                        background: '',

                        name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                    }}
                    userView
                />
                <SideNavItem

                >
                    Saved Notes
                        </SideNavItem>

                <SideNavItem divider />
                <SideNavItem subheader>
                    Resources
                        </SideNavItem>
                <SideNavItem
                    href="#!third"
                    waves
                >
                    Saved Links
                    </SideNavItem>
            </SideNav>
        </>
    )
}
