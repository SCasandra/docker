const COURSES = {
    2: {
        id: 2,
        description: 'Angular Core Deep Dive',
        longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        lessonsCount: 10,
        category: 'BEGINNER',
        seqNo: 2,
        url: 'angular-core-course',
        promo:false
      },
      1: {
          id: 1,
          description: 'Serverless Angular with Firebase Course',
          longDescription: 'Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire',
          iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
          lessonsCount: 10,
          category: 'BEGINNER',
          seqNo: 4,
          url: 'serverless-angular',
          promo:false
        }
}

export function findAllCourses() {
    return Object.values(COURSES);
}