import { Col, Divider, Row, Table, Pagination, Form, Input, Select, Button, Space, Collapse } from 'antd';
import React, {useState} from 'react';
import FormBuilder from 'antd-form-builder'

const AddEmployee = ({}) => {
    const [form] = Form.useForm();

    const onAddEmployee = () => {

    }

    const meta={
        columns : 3,
        formItemLayout: "horizontal",
        colon: true,
        fields : [
            {
                key: "salutation",
                label: "Salutation",
                colSpan: 1,
                required: true
            },
            {
                key: "identificationNumber",
                label: "Identification No",
                colSpan: 1,
                required : true
            },
            {
                key: "nextLin1",
                colSpan: 3,
                render(){
                    return <Divider style={{display: "none"}}/>
                }
            },
            {
                key: "firstName",
                label: "First Name",
                colSpan: 1,
                required: true
            },
            {
                key: "middleName",
                label: "Middle Name",
                colSpan: 1,
                required: true
            },
            {
                key: "nextLine2",
                colSpan: 3,
                render(){
                    return <Divider style={{display: "none"}}/>
                }
            },
            {
                key: "lastName",
                label: "Last Name",
                colSpan: 1,
                required: true
            },
        ]
    }
    
    const metaCareer={
        columns : 3,
        formItemLayout: "horizontal",
        colon: true,
        fields : [
            {
                key: "costCenter",
                label: "Cost Center",
                colSpan: 1
            },
            {
                key: "department",
                label: "Department",
                colSpan: 1,
                required : true
            },
            {
                key: "employementCategory",
                label: "Employement Category",
                colSpan: 1,
                required : true
            },
            {
                key: "employeeNumber",
                label: "Employee Number",
                colSpan: 1,
                required : true
            },
            {
                key: "bussinessUnit",
                label: "Bussiness Unit",
                colSpan: 1,
                required : true
            },
            {
                key: "workingHours",
                label: "Working Hours",
                colSpan: 1,
                required : true
            }
        ]
    }
    

    return <>
        <div style={{padding:20}}>
            <Row style={{width:"100%"}} gutter={{xs:4, sm: 16, md:0, lg:0}}>
                <Col className="gutter-row"  style={{paddingRight: 20}}>
                    <h3 style={{color:'red'}}>Create an Employee</h3>
                </Col>
                <Col className="gutter-row" style={{marginLeft:"50%"}}>
                    <Button type="primary" style={{marginRight:10}}>Add Employee</Button>
                    <Button>Cancel</Button>
                </Col>
            </Row>
            <Divider></Divider>
            <Row style={{width:"100%"}}>
                <Form form={form} style={{width:"100%"}} layout="vertical" onSubmit={onAddEmployee}>
                    <Collapse id="addFormCollapse" ghost expandIconPosition="right" defaultActiveKey="personalDetails" >
                        <Collapse.Panel header="Personal Details"  key="personalDetails">
                            <FormBuilder form={form} meta={meta}/>
                        </Collapse.Panel>
                    </Collapse>
                    <Divider/>
                    <Collapse id="addFormCollapse" ghost expandIconPosition="right" defaultActiveKey="careerDetails" >
                        <Collapse.Panel header="Career Details"  key="careerDetails">
                            <FormBuilder form={form} meta={metaCareer}/>
                        </Collapse.Panel>
                    </Collapse>
                </Form>
            </Row>
        </div>
    </>;
}

export default AddEmployee;