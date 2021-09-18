import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SortIcon from '@material-ui/icons/Sort';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from 'react-bootstrap';
const ListScreen = (props) => {
  const dataUsers = useSelector((state) => state.userReducer.dataUsers);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(5);
  const [order, setOrder] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [genderFilter, setGenderFilter] = useState(1);
  const [emailFilter, setEmailFilter] = useState(1);

  // handle per page

  useEffect(() => {
    dispatch({
      type: 'ADD_PAGE',
      pages: pageNumber,
    });
    // eslint-disable-next-line
  }, [pageNumber]);

  useEffect(() => {
    console.log(dataUsers);
    if (dataUsers[0] === undefined) {
      setIsLoading(true);
    } else {
      setData(dataUsers[0]);
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [dataUsers[0]]);

  const sorting = () => {
    if (order === 1) {
      const sorted = [...data].sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      setData(sorted);
      setOrder(2);
    }
    if (order === 2) {
      const sorted = [...data].sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
      setData(sorted);
      setOrder(3);
    }
    if (order === 3) {
      setData(dataUsers[0]);
      setOrder(1);
    }
  };

  const genderSorting = () => {
    if (genderFilter === 1) {
      const sorted = [...data].sort((a, b) => (a.gender > b.gender ? 1 : -1));
      setData(sorted);
      setGenderFilter(2);
    }
    if (genderFilter === 2) {
      const sorted = [...data].sort((a, b) => (a.gender < b.gender ? 1 : -1));
      setData(sorted);
      setGenderFilter(3);
    }
    if (genderFilter === 3) {
      setData(dataUsers[0]);
      setGenderFilter(1);
    }
  };
  //email filter
  const emailSorting = () => {
    if (emailFilter === 1) {
      const sorted = [...data].sort((a, b) => (a.email > b.email ? 1 : -1));
      setData(sorted);
      setEmailFilter(2);
    }
    if (emailFilter === 2) {
      const sorted = [...data].sort((a, b) => (a.email < b.email ? 1 : -1));
      setData(sorted);
      setEmailFilter(3);
    }
    if (emailFilter === 3) {
      setData(dataUsers[0]);
      setEmailFilter(1);
    }
  };

  return (
    <div style={{ marginBottom: '100px' }}>
      <Layout sidebar>
        <div>
          <input
            placeholder='Searching'
            className=' '
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />

          <div
            onClick={() => {
              if (searchValue.length > 0) {
                setSearchValue('');
              }
            }}
            className='absolute top-12 right-2'
          >
            {(searchValue.length === 0 && (
              <SearchIcon fontSize='large' color='action' />
            )) ||
              (searchValue.length > 0 && (
                <CloseIcon fontSize='large' color='action' />
              ))}
          </div>
        </div>
        <Table responsive='sm'>
          <thead>
            <tr>
              <th>
                <div>
                  Name
                  <Button
                    className='mx-2'
                    variant='success'
                    onClick={() => sorting()}
                  >
                    <SortIcon fontSize='small' />
                  </Button>
                </div>
              </th>
              <th>
                <div>
                  Email
                  <Button
                    className='mx-2'
                    variant='success'
                    onClick={() => emailSorting()}
                  >
                    <SortIcon fontSize='small' />
                  </Button>
                </div>
              </th>
              <th>
                <div>
                  Gender
                  <Button
                    className='mx-2'
                    variant='success'
                    onClick={() => genderSorting()}
                  >
                    <SortIcon fontSize='small' />
                  </Button>
                </div>
              </th>
              <th>
                <div>
                  <Button className='mx-2' variant='success'>
                    Phone
                  </Button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data
                .filter(
                  (el) =>
                    el.name.first
                      .toLowerCase()
                      .indexOf(searchValue.toLowerCase()) !== -1 ||
                    el.name.last
                      .toLowerCase()
                      .indexOf(searchValue.toLowerCase()) !== -1 ||
                    el.nat.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                      -1
                )
                .map((item, index) => {
                  let full_name = item.name.first + ' ' + item.name.last;
                  return (
                    <tr key={index}>
                      <td className=''>{full_name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender.toUpperCase()}</td>
                      <td>{item.phone}</td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </Layout>
    </div>
  );
};

export default ListScreen;
