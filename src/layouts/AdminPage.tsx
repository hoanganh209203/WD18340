import React from 'react'
import { Outlet } from 'react-router-dom'
import HaederAdmin from '~/components/Admin_Layout/HaederAdmin'

type Props = {}

const AdminPage = (props: Props) => {
  return (
    <>
    <HaederAdmin/>
    <Outlet/>
    </>
    )
}

export default AdminPage