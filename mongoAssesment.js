
db.classtest.insertMany(
    [

    {
        users: 'surya',
        codekata : 'problem-solved',
        attendance : 'present',
        topics : 'html',
        tasks : 'submitted',
        companyDrives : 'Amazon',
        mentors : '12',
        month: '14th-oct-2020'
    },
    {
        users: 'vijay',
        codekata : 'problem-not-solved',
        attendance : 'absent',
        topics : 'javascript',
        tasks : 'not-submitted',
        companyDrives : 'flipkart',
        mentors : '15',
        month: '20th-oct-2020'
    },
    {
        users: 'vikram',
        codekata : 'problem-solved',
        attendance : 'present',
        topics : 'react',
        tasks : 'submitted',
        companyDrives : 'google',
        mentors : '20',
        month: '30th-feb-2020'
    },
    {
        users: 'ajith',
        codekata : 'problem-not-solved',
        attendance : 'absent',
        topics : 'angular',
        tasks : 'not-submitted',
        companyDrives : 'capgemini',
        mentors : '25',
        month: '22th-oct-2020'
    },
    {
        users: 'surya',
        codekata : 'problem-solved',
        attendance : 'present',
        topics : 'html',
        tasks : 'submitted',
        companyDrives : 'Amazon',
        mentors : '12',
        month: '14th-oct-2020'
    },
    {
        users: 'vijay',
        codekata : 'problem-not-solved',
        attendance : 'absent',
        topics : 'javascript',
        tasks : 'not-submitted',
        companyDrives : 'flipkart',
        mentors : '15',
        month: '20th-oct-2020'
    },
    {
        users: 'vikram',
        codekata : 'problem-solved',
        attendance : 'present',
        topics : 'react',
        tasks : 'submitted',
        companyDrives : 'google',
        mentors : '20',
        month: '30th-feb-2020'
    },
    {
        users: 'ajith',
        codekata : 'problem-not-solved',
        attendance : 'absent',
        topics : 'angular',
        tasks : 'not-submitted',
        companyDrives : 'capgemini',
        mentors : '25',
        month: '22th-oct-2020'
    }
]
    
)

//Find all the topics and tasks which are thought in the month of October

db.classtest.find({month : {$regex : 'oct'}}, {topics : 1 , tasks : 1} )
[
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c80"),
      topics: 'html',
      tasks: 'submitted'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c81"),
      topics: 'javascript',
      tasks: 'not-submitted'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c82"),
      topics: 'react',
      tasks: 'submitted'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c83"),
      topics: 'angular',
      tasks: 'not-submitted'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c84"),
      topics: 'html',
      tasks: 'submitted'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c85"),
      topics: 'javascript',
      tasks: 'not-submitted'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c87"),
      topics: 'angular',
      tasks: 'not-submitted'
    }
  ]

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.classtest.find({month : {$regex : 'oct'}})
[
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c80"),
      users: 'surya',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'html',
      tasks: 'submitted',
      companyDrives: 'Amazon',
      mentors: '12',
      month: '14th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c81"),
      users: 'vijay',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'javascript',
      tasks: 'not-submitted',
      companyDrives: 'flipkart',
      mentors: '15',
      month: '20th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c82"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c83"),
      users: 'ajith',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'angular',
      tasks: 'not-submitted',
      companyDrives: 'capgemini',
      mentors: '25',
      month: '22th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c84"),
      users: 'surya',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'html',
      tasks: 'submitted',
      companyDrives: 'Amazon',
      mentors: '12',
      month: '14th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c85"),
      users: 'vijay',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'javascript',
      tasks: 'not-submitted',
      companyDrives: 'flipkart',
      mentors: '15',
      month: '20th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c87"),
      users: 'ajith',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'angular',
      tasks: 'not-submitted',
      companyDrives: 'capgemini',
      mentors: '25',
      month: '22th-oct-2020'
    }
  ]

  //Find all the company drives and students who are appeared for the placement.

  db.classtest.find({attendance : {$in : ['present']}})

  [
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c80"),
      users: 'surya',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'html',
      tasks: 'submitted',
      companyDrives: 'Amazon',
      mentors: '12',
      month: '14th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c82"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c84"),
      users: 'surya',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'html',
      tasks: 'submitted',
      companyDrives: 'Amazon',
      mentors: '12',
      month: '14th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c86"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-feb-2020'
    }
  ]

  //Find the number of problems solved by the user in codekata

  db.classtest.find({codekata: {$regex: 'problem-solved'}})

  [
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c80"),
      users: 'surya',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'html',
      tasks: 'submitted',
      companyDrives: 'Amazon',
      mentors: '12',
      month: '14th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c82"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c84"),
      users: 'surya',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'html',
      tasks: 'submitted',
      companyDrives: 'Amazon',
      mentors: '12',
      month: '14th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c86"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-feb-2020'
    }
  ]


  //Find all the mentors with who has the mentee's count more than 15

  db.classtest.find({mentors : {$gt : '15'}})

  [
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c82"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c83"),
      users: 'ajith',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'angular',
      tasks: 'not-submitted',
      companyDrives: 'capgemini',
      mentors: '25',
      month: '22th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c86"),
      users: 'vikram',
      codekata: 'problem-solved',
      attendance: 'present',
      topics: 'react',
      tasks: 'submitted',
      companyDrives: 'google',
      mentors: '20',
      month: '30th-feb-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c87"),
      users: 'ajith',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'angular',
      tasks: 'not-submitted',
      companyDrives: 'capgemini',
      mentors: '25',
      month: '22th-oct-2020'
    }
  ]

  //Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

  db.classtest.find({$and : [{attendance : 'absent'}, {tasks : 'not-submitted'},{month : {$regex : 'oct'}}]})

  [
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c81"),
      users: 'vijay',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'javascript',
      tasks: 'not-submitted',
      companyDrives: 'flipkart',
      mentors: '15',
      month: '20th-oct-2020'
    },
    {
      _id: ObjectId("64a4652fa8ccd13b23da3c83"),
      users: 'ajith',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'angular',
      tasks: 'not-submitted',
      companyDrives: 'capgemini',
      mentors: '25',
      month: '22th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c85"),
      users: 'vijay',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'javascript',
      tasks: 'not-submitted',
      companyDrives: 'flipkart',
      mentors: '15',
      month: '20th-oct-2020'
    },
    {
      _id: ObjectId("64a468c6a8ccd13b23da3c87"),
      users: 'ajith',
      codekata: 'problem-not-solved',
      attendance: 'absent',
      topics: 'angular',
      tasks: 'not-submitted',
      companyDrives: 'capgemini',
      mentors: '25',
      month: '22th-oct-2020'
    }
  ]