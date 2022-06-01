import React from 'react'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Table1 from './Table1'

const Form = () => {
    const [form, setForm] = useState({
        username: "",
        age: null,
        address: "",
        salary: null,
        // ismarried: false,
        Department: ""
    })
    const [data, setData] = useState([form])
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        console.log(e);
        if (type == "checkbox") {
            setForm({
                ...form,
                [name]: checked
            })
        }
        else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(data => [...data, form])

        console.log(data)
    }
    return (
        <div>Form
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <Input type="text" name='username' placeholder='Enter Name' value={form.username} onChange={handleChange} width="auto"  />
                </div>
                <div>
                    <label>Age:</label>
                    <Input type="number" name='age' placeholder='Enter Age' value={form.age} onChange={handleChange} width="auto" />
                </div>
                <div>
                    <label>Address:</label>
                    <Input type="text" name='address' placeholder='Enter Address' value={form.address} onChange={handleChange} width="auto" />
                </div>
                <div>
                    <label>Department:</label>
                    <Select placeholder='Select option' name="Department" value={form.Department} onChange={handleChange} width="200px" marginLeft="670px">
                        <option value="IT">IT</option>
                        <option value="management">Management</option>
                        <option value="service">Service</option>
                    </Select>
                </div>
                <div>
                    <label>Salary:</label>
                    <Input type="number" name='salary' placeholder='Enter Salary' value={form.salary} onChange={handleChange} width="auto" />
                </div>
                <div>
                    <Checkbox colorScheme='green' defaultChecked name='ismarried' value={form.ismarried} onChange={handleChange}>
                        :ismarried
                    </Checkbox>
                    
                </div>
                <Button colorScheme='blue' type='submit'>Submit</Button>
            </form>
           <Table1 data={data}></Table1>
        </div>
    )
}

export default Form