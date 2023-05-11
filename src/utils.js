const get_data = () => {
    // return type will be array of
    // {
    //     id,
    //     name,
    //     avatar,
    //     bgImg,
    //     desireWorkType,
    //     phone,
    //     email,
    //     experience: [
    //         {
    //             id,
    //             company,
    //             position,
    //             type,
    //             start,
    //             end,
    //             skills
    //         }
    //     ],
    //     education: [
    //         {
    //             id,
    //             school,
    //             img,
    //             degree,
    //             major,
    //             start,
    //             end
    //         }
    //     ],
    //     skills
    // }

    return [
        {
            id: 1,
            name: 'John',
            avatar:"https://picsum.photos/200/300",
            bgImg:"https://picsum.photos/400/300",
            desireWorkType:['Talent Acquisition Supervisor'],
            phone: '0912345678',
            email: 'aabb@gmail.com',
            experience: [
                {
                    id: 1,
                    company: 'ABC',
                    position: 'Frontend Developer',
                    type:'Full-time',
                    start: '2019-01-01',
                    end: '2020-01-01',
                    skills: ['React', 'Vue', 'Angular']
                },
                {
                    id: 2,
                    company: 'DEF',
                    position: 'Backend Developer',
                    type:'Part-time',
                    start: '2018-01-01',
                    end: '2019-01-01',
                    skills: ['NodeJS', 'Express', 'MongoDB']
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'ABC University',
                    img:'https://picsum.photos/100/100',
                    degree: 'Bachelor',
                    major: 'Computer Science',
                    start: '2015-01-01',
                    end: '2019-01-01'
                },
                {
                    id: 2,
                    school: 'DEF University',
                    img:'https://picsum.photos/100/90',
                    degree: 'Master',
                    major: 'Computer Science',
                    start: '2019-01-01',
                    end: '2021-01-01',
                }
            ],
            skills: ['React', 'Vue', 'Angular', 'NodeJS', 'Express', 'MongoDB'],
        },
        {
            id: 2,
            name: 'Mary',
            avatar:"https://picsum.photos/250/300",
            bgImg:"https://picsum.photos/400/400",
            desireWorkType:['Talent Acquisition Supervisor'],
            phone: '0912345678',
            email: 'ccdd@gmail.com',
            experience: [
                {
                    id: 1,
                    company: 'GHF',
                    position: 'Institutional Sales',
                    type:'Full-time',
                    start: '2019-01-01',
                    end: '2020-01-01',
                    skills: ['recruitment', 'interview', 'HR'],
                },
                {
                    id: 2,
                    company: 'IJK',
                    position: 'HR',
                    type:'Part-time',
                    start: '2018-01-01',
                    end: '2019-01-01',
                    skills: ['interview', 'HR'],
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'LMN University',
                    img:'https://picsum.photos/90/100',
                    degree: 'Bachelor',
                    major: 'Human Resource',
                    start: '2015-01-01',
                    end: '2019-01-01'
                }
            ],
            skills: ['recruitment', 'interview', 'HR'],
        },
        {
            id: 3,
            name: 'Tom',
            avatar:"https://picsum.photos/220/300",
            bgImg:"https://picsum.photos/400/500",
            desireWorkType:['Head Hunter'],
            phone: '0912345678',
            email: 'gewgr@gmail.com',
            experience: [
                {
                    id: 1,
                    company: 'OPQ',
                    position: 'Head Hunter',
                    type:'Full-time',
                    start: '2019-01-01',
                    end: '2020-01-01',
                    skills: ['recruitment', 'interview', 'HR'],
                },
                {
                    id: 2,
                    company: 'KKday',
                    position: 'Data Product Manager',
                    type:'Part-time',
                    start: '2018-01-01',
                    end: '2019-01-01',
                    skills: ['Product Manager', 'Team Management'],
                },
                {
                    id: 3,
                    company: 'iKala',
                    position: 'Data Analyst',
                    type:'Part-time',
                    start: '2018-01-01',
                    end: '2019-01-01',
                    skills: ['Data Analyst', 'Data Visualization'],
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'STU University',
                    img:'https://picsum.photos/90/90',
                    degree: 'Bachelor',
                    major: 'Computer Science',
                    start: '2015-01-01',
                    end: '2019-01-01'
                }
            ],
            skills: ['recruitment', 'interview', 'HR', 'Product Manager', 'Team Management', 'Data Analyst', 'Data Visualization'],
        },
        {
            id: 4,
            name: 'Jerry',
            avatar:"https://picsum.photos/270/300",
            bgImg:"https://picsum.photos/450/500",
            desireWorkType:['Data Consultant','Data Analyst'],
            phone: '0912345678',
            email: 'ervneonv@gmail.com',
            experience: [
                {
                    id: 1,
                    company: 'STU',
                    position: 'Data Analyst',
                    type:'Full-time',
                    start: '2019-01-01',
                    end: '2020-01-01',
                    skills: ['Data Analyst', 'Data Visualization'],
                },
            ],
            education: [
                {
                    id: 1,
                    school: 'STU University',
                    img:'https://picsum.photos/80/90',
                    degree: 'Bachelor',
                    major: 'Computer Science',
                    start: '2015-01-01',
                    end: '2019-01-01'
                },
            ],
            skills: ['Data Analyst', 'Data Visualization'],
        },
        {
            id: 5,
            name: 'Jack',
            avatar:"https://picsum.photos/260/300",
            bgImg:"https://picsum.photos/400/350",
            desireWorkType:['Supply Chain Manager','PM'],
            phone: '0912345678',
            email: 'veoinve@gmail.com',
            experience: [
                {
                    id: 1,
                    company: 'iN Search',
                    position: 'Associate Consultant',
                    type:'Full-time',
                    start: '2019-01-01',
                    end: '2020-01-01',
                    skills: ['sales', 'recruitment', 'interview', 'HR'],
                },
            ],
            education: [
                {
                    id:1,
                    school: 'BA University',
                    img:'https://picsum.photos/80/80',   
                    degree: 'Bachelor',
                    major: 'Business Administration',
                    start: '2015-01-01',
                    end: '2019-01-01'
                }
            ],
            skills: ['sales', 'recruitment', 'interview', 'HR'],
        },
        {
            id: 6,
            name: 'Natasha',
            avatar:"https://picsum.photos/300/300",
            bgImg:"https://picsum.photos/400/400",
            desireWorkType:['Semi-conductor Engineer'],
            phone: '0912345678',
            email: 'nawegrg@gmail.com',
            experience: [
                {
                    id: 1,
                    company: 'Robert Walters',
                    position: 'Consultant',
                    type:'Full-time',
                    start: '2019-01-01',
                    end: '2020-01-01',
                    skills: ['new business development', 'recruitment', 'interview'],
                },
                {
                    id: 2,
                    company: 'China Steel',
                    position: 'Project Manager',
                    type:'Part-time',
                    start: '2018-01-01',
                    end: '2019-01-01',
                    skills: ['Project Manager', 'Team Management'],
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'NTU University',
                    img:'https://picsum.photos/80/70',
                    degree: 'Bachelor',
                    major: 'Electrical Engineering',
                    start: '2015-01-01',
                    end: '2019-01-01'
                },
                {
                    id: 2,
                    school: 'NTU University',
                    img:'https://picsum.photos/95/90',
                    degree: 'Master',
                    major: 'Electrical Engineering',
                    start: '2019-01-01',
                    end: '2021-01-01'
                }
            ],
            skills: ['new business development', 'recruitment', 'interview', 'Project Manager', 'Team Management'],
        },
    ]

}

export default get_data;