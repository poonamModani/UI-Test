import { Col, Divider, Row, Table, Pagination, Form, Input, Select } from 'antd';
import React, {useState} from 'react';

const EmployeeList = ({}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [form] = Form.useForm();
    const dataSource = [
        {
          key: '1',
          lastName: 'Last01',
          firstName: 'First01',
          relationship: 'Employee',
          employee: 'ABC',
          idNo: 'UAT001',
          birthDate: '7/15/1984',
          email:'test001@gmail.com',
          status: 'Active'
        },
        {
            key: '2',
            lastName: 'Last02',
            firstName: 'First02',
            relationship: 'Employee',
            employee: 'ABC',
            idNo: 'UAT002',
            birthDate: '7/15/1985',
            email:'test002@gmail.com',
            status: 'Active'
          },
          {
            key: '3',
            lastName: 'Last03',
            firstName: 'First03',
            relationship: 'Employee',
            employee: 'ABC',
            idNo: 'UAT003',
            birthDate: '7/15/1980',
            email:'test003@gmail.com',
            status: 'Inactive'
          },
      ];
      
      const columns = [
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Relationship',
          dataIndex: 'relationship',
          key: 'relationship',
        },
        {
            title: 'Employee',
            dataIndex: 'employee',
            key: 'eployee',
          },
          {
            title: 'ID No.',
            dataIndex: 'idNo',
            key: 'idNo',
          },
          {
            title: 'Birth Date',
            dataIndex: 'birthDate',
            key: 'birthDate',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          }
      ];

    const onShowSzeChanged = (current, pageSize) => {
        setCurrentPage(current);
        setPageSize(pageSize);
    }

    const onPageChange = (pageNumber, pageSize) => {
        setCurrentPage(pageNumber);
        setPageSize(pageSize);
    }

    const onSearch = (event) => {
        console.log(event.target.value);
        //filter data based on searched value
    }

    const onStatusChange = (value) => {
        console.log(value);
        //filter data based on the selected value
    }
    return <>
        <div style={{padding:20}}>
            <Row>
                <h3 style={{color:'red'}}>Members Management for ABC</h3>
            </Row>
            <Divider></Divider>
            <Row style={{paddingTop:20}}>
                <Form style={{width: "100%"}}   form={form} layout="vertical">
                    <Row gutter={{xs:4, sm: 16, md:0, lg:0}} style={{alignItems:'center'}}>
                        <Col className="gutter-row" span={16} style={{paddingRight: 20}}>
                            <Form.Item name="searchText" label="Name, ID or Email">
                                <Input.Search placeholder="Searh for Name, ID or Email" onChange={onSearch}/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Form.Item name="employeeStatus" label="Employee Status">
                                <Select onChange={onStatusChange}>
                                    <Select.Option value="Active">Active</Select.Option>
                                    <Select.Option value="Inactive">Inactive</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Row>
            <Divider></Divider>
            <Row>
                <Table style={{width:"100%"}} columns={columns} dataSource={dataSource} pagination={false}></Table>
            </Row>
            <Row style={{paddingTop:20, float:"right"}}>
                <div className="mar-2 ft-r">
                    <Pagination
                        showQuickJumper
                        showSizeChanger
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onShowSizeChange={onShowSzeChanged}
                        onPageChange={onPageChange}
                        total={dataSource.length}
                        showTotal={(total, range)=>
                        `${range[0]}-${range[1]} of ${total} items`}
                    >

                    </Pagination>
                </div> 
            </Row>

        </div>
    </>;
}

export default EmployeeList;