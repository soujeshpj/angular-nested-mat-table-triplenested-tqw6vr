import { Address } from "./address.model";
import { MatTableDataSource } from '@angular/material/table';

export interface User {
    name: string;
    email: string;
    phone: string;
    addresses?: Address[] | MatTableDataSource<Address>;
  }
  
  export const USERS: User[] = [
    {
      name: 'Mason',
      email: 'mason@test.com',
      phone: '9864785214',
      addresses: [
        {
          street: 'Street 1',
          zipCode: '78542',
          city: 'Kansas',
          comments: [
            {
              commentID: 1,
              comment: 'Test',
              commentStatus: 'Open',
              validations: [
                { validatedBy: 'User1', validatedDate: '2023-01-01', status: 'Valid' },
              ],
            },
            // ... other comments
          ],
        },
        // ... other addresses
      ],
    },
    {
        name: 'Eugene',
        email: 'eugene@test.com',
        phone: '8786541234',
        addresses: [
          {
            street: 'Street 5',
            zipCode: '23547',
            city: 'Utah',
            comments: [
              {
                commentID: 2,
                comment: 'Test',
                commentStatus: 'Open',
                validations: [
                  { validatedBy: 'User2', validatedDate: '2023-01-02', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Jason',
        email: 'jason@test.com',
        phone: '7856452187',
        addresses: [
          {
            street: 'Street 8',
            zipCode: '56789',
            city: 'California',
            comments: [
              {
                commentID: 3,
                comment: 'Test',
                commentStatus: 'Closed',
                validations: [
                  { validatedBy: 'User3', validatedDate: '2023-01-03', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Sophie',
        email: 'sophie@test.com',
        phone: '9876543210',
        addresses: [
          {
            street: 'Street 12',
            zipCode: '12345',
            city: 'New York',
            comments: [
              {
                commentID: 4,
                comment: 'Test',
                commentStatus: 'Open',
                validations: [
                  { validatedBy: 'User4', validatedDate: '2023-01-04', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Oliver',
        email: 'oliver@test.com',
        phone: '7458963214',
        addresses: [
          {
            street: 'Street 15',
            zipCode: '78901',
            city: 'Texas',
            comments: [
              {
                commentID: 5,
                comment: 'Test',
                commentStatus: 'Open',
                validations: [
                  { validatedBy: 'User5', validatedDate: '2023-01-05', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Emma',
        email: 'emma@test.com',
        phone: '9876543210',
        addresses: [
          {
            street: 'Street 18',
            zipCode: '45678',
            city: 'Chicago',
            comments: [
              {
                commentID: 6,
                comment: 'Test',
                commentStatus: 'Closed',
                validations: [
                  { validatedBy: 'User6', validatedDate: '2023-01-06', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Liam',
        email: 'liam@test.com',
        phone: '7458963214',
        addresses: [
          {
            street: 'Street 22',
            zipCode: '56789',
            city: 'Los Angeles',
            comments: [
              {
                commentID: 7,
                comment: 'Test',
                commentStatus: 'Open',
                validations: [
                  { validatedBy: 'User7', validatedDate: '2023-01-07', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Ava',
        email: 'ava@test.com',
        phone: '1234567890',
        addresses: [
          {
            street: 'Street 25',
            zipCode: '12345',
            city: 'San Francisco',
            comments: [
              {
                commentID: 8,
                comment: 'Test',
                commentStatus: 'Open',
                validations: [
                  { validatedBy: 'User8', validatedDate: '2023-01-08', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Noah',
        email: 'noah@test.com',
        phone: '6789012345',
        addresses: [
          {
            street: 'Street 28',
            zipCode: '67890',
            city: 'Miami',
            comments: [
              {
                commentID: 9,
                comment: 'Test',
                commentStatus: 'Closed',
                validations: [
                  { validatedBy: 'User9', validatedDate: '2023-01-09', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Isabella',
        email: 'isabella@test.com',
        phone: '8901234567',
        addresses: [
          {
            street: 'Street 32',
            zipCode: '78901',
            city: 'Orlando',
            comments: [
              {
                commentID: 10,
                comment: 'Test',
                commentStatus: 'Open',
                validations: [
                  { validatedBy: 'User10', validatedDate: '2023-01-10', status: 'Valid' },
                ],
              },
            ],
          },
        ],
      }
    // ... other users
  ];
  