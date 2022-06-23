import React,{useContext} from 'react'
import {    TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from "@material-ui/core"
import { MultiStepper } from '../StepContex'

function DisplayData() {
    const  {finalData} = useContext(MultiStepper)
  return (
    <div>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> Frist Name</TableCell>
                    <TableCell> Last Name</TableCell>
                    <TableCell> Contact number </TableCell>
                    <TableCell> EMail id </TableCell>
                    <TableCell> Country Name</TableCell>
                    <TableCell>District</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>landmark</TableCell>
                    <TableCell>PostalCode</TableCell>




                </TableRow>
            </TableHead>
        </Table>
        <TableBody>
            {finalData.map((data) => {
                <TableRow key={data.email}>
                    <TableCell>  {data.firstname}</TableCell>
                    <TableCell> {data.lastname}</TableCell>
                    <TableCell>{data.contactnumber}</TableCell>

                    <TableCell> {data.email} </TableCell>
                    <TableCell> {data.country} </TableCell>
                    <TableCell> {data.city}</TableCell>
                    <TableCell>{data.district}</TableCell>
                    <TableCell>{data.postalcode}</TableCell>
                    <TableCell>{data.landmark}</TableCell>


                </TableRow>
            })}
        </TableBody>
 </TableContainer>
    </div>
  )
}

export default DisplayData