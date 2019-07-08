'use strict';

module.exports = function(Employee) {

// api to fetch data of employee

    Employee.getName = function(id, cb) {
        Employee.findById( id, function (err, instance) {
            var response = "Name of employee is " + instance.name;
            cb(null, response);
            console.log(response);
        });
      }

      Employee.remoteMethod ('getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );

// api to post data for employee


    Employee.postData = function(data, cb) {
      cb(null, 'Data are ' + data);
      console.log(data);
      console.log(Object.keys(data));
    }

    Employee.remoteMethod('postData', 
    {
      accepts: [
        {
          arg: 'data',
          type: 'object',
          required: true,
          default: '{"name": "rachit" + "," + "empId" : "1234"}',
          http: {source: 'body'},
        }
      ],
          returns: {arg: 'greeting', type: 'object'}
    });


// api to delete to data of employee

    Employee.delData = function(id, cb) {
      Employee.destroyById( id, function (err, instance) {
          var response = "Name of employee is " + instance;
          cb(null, response);
          console.log(response);
          console.log(JSON.stringify(response));
          console.log(Object.keys(response));
      });
    }

    Employee.remoteMethod ('delData',
      {
        http: {path: '/deldata', verb: 'get'},
        accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
        returns: {arg: 'name', type: 'string'}
      }
  );






};
