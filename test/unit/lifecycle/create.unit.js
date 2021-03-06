const test = require('tap').test
const server = require('../../utils/server').startPlainArrow().server
const connector = require('../../utils/server').startPlainArrow().connector
const createMethod = require('../../../lib/methods/create').create
const twilioAPI = require('../../../utils/twilioAPI')(connector.config)
const sinon = require('sinon')
connector.twilioAPI = twilioAPI

test('Create Call Error Case', function (t) {
  // DATA STUFF
  const Model = server.getModel('call')
  const errorMessage = 'My error'
  function cbError (errorMessage) { }
  const cbErrorSpy = sinon.spy(cbError)

  // MOCKING STUFF
  const twilioAPIStubError = sinon.stub(
    twilioAPI,
    'createCall',
    // The same parameters as the real function
    (Model, values, number, callback) => {
      // This is the body of the mocked function from twilio API

      // This is the anonymous function inside create.js
      callback(errorMessage)
    }
  )

  // EXECUTION STUFF
  createMethod.bind(connector, Model, {}, cbErrorSpy)()
  t.ok(twilioAPIStubError.calledOnce)
  t.ok(cbErrorSpy.calledOnce)
  t.ok(cbErrorSpy.calledWith(errorMessage))

  twilioAPIStubError.restore()
  t.end()
})

test('Create Call Success Case', function (t) {
  // DATA STUFF
  const Model = server.getModel('call')
  const data = 'MyData'
  function cbOk (errorMessage, data) { }
  const cbOkSpy = sinon.spy(cbOk)

  // MOCKING STUFF
  const twilioAPIStubOk = sinon.stub(
    twilioAPI,
    'createCall',
    // The same parameters as the real function
    (Model, values, number, callback) => {
      // This is the anonymous function inside create.js
      callback(null, data)
    }
  )

  // EXECUTION STUFF
  createMethod.bind(connector, Model, {}, cbOkSpy)()
  t.ok(twilioAPIStubOk.calledOnce)
  t.ok(cbOkSpy.calledOnce)
  t.ok(cbOkSpy.calledWith(null, data))

  twilioAPIStubOk.restore()
  t.end()
})

test('Create Message Error Case', function (t) {
  const Model = server.getModel('message')
  const errorMessage = 'My error'
  function cbError (errorMessage) { }
  const cbErrorSpy = sinon.spy(cbError)

  const twilioAPIStubError = sinon.stub(
    twilioAPI,
    'createMessage',
    // The same parameters as the real function
    (Model, values, number, callback) => {
      callback(errorMessage)
    }
  )

  createMethod.bind(connector, Model, {}, cbErrorSpy)()
  t.ok(twilioAPIStubError.calledOnce)
  t.ok(cbErrorSpy.calledOnce)
  t.ok(cbErrorSpy.calledWith(errorMessage))

  twilioAPIStubError.restore()
  t.end()
})

test('Create Message Success Case', function (t) {
  const Model = server.getModel('message')
  const data = 'Message'
  function cbOk (errorMessage, data) { }
  const cbOkSpy = sinon.spy(cbOk)

  const twilioAPIStub = sinon.stub(
    twilioAPI,
    'createMessage',
    // The same parameters as the real function
    (Model, values, number, callback) => {
      callback(null, data)
    }
  )

  createMethod.bind(connector, Model, {}, cbOkSpy)()
  t.ok(twilioAPIStub.calledOnce)
  t.ok(cbOkSpy.calledOnce)
  t.ok(cbOkSpy.calledWith(null, data))

  twilioAPIStub.restore()
  t.end()
})

test('Create Address Error Case', function (t) {
  const Model = server.getModel('address')
  const errorMessage = 'Error'
  function cbError (errorMessage) { }
  const cbErrorSpy = sinon.spy(cbError)

  const twilioAPICreateAddressStub = sinon.stub(
    twilioAPI,
    'createAddress',
    (Model, values, callback) => {
      callback(errorMessage)
    }
  )

  createMethod.bind(connector, Model, {}, cbErrorSpy)()
  t.ok(twilioAPICreateAddressStub.calledOnce)
  t.ok(cbErrorSpy.calledOnce)
  t.ok(cbErrorSpy.calledWith(errorMessage))

  twilioAPICreateAddressStub.restore()
  t.end()
})

test('Create Address Success Case', function (t) {
  const Model = server.getModel('address')
  const data = 'Correct Data'
  function cbOk (errorMessage, data) { }
  const cbOkSpy = sinon.spy(cbOk)

  const twilioAPICreateAddressStub = sinon.stub(
    twilioAPI,
    'createAddress',
    (Model, values, callback) => {
      callback(null, data)
    }
  )

  createMethod.bind(connector, Model, {}, cbOkSpy)()
  t.ok(twilioAPICreateAddressStub.calledOnce)
  t.ok(cbOkSpy.calledOnce)
  t.ok(cbOkSpy.calledWith(null, data))

  twilioAPICreateAddressStub.restore()
  t.end()
})

test('Create Queue Error Case', function (t) {
  const Model = server.getModel('queue')
  const errorMessage = 'Error'
  function cbError (errorMessage) { }
  const cbErrorSpy = sinon.spy(cbError)

  const twilioAPICreateQueueStub = sinon.stub(
    twilioAPI,
    'createQueue',
    (Model, values, number, callback) => {
      callback(errorMessage)
    }
  )

  createMethod.bind(connector, Model, {}, cbErrorSpy)()
  t.ok(twilioAPICreateQueueStub.calledOnce)
  t.ok(cbErrorSpy.calledOnce)
  t.ok(cbErrorSpy.calledWith(errorMessage))

  twilioAPICreateQueueStub.restore()
  t.end()
})

test('Create Queue Success Case', function (t) {
  const Model = server.getModel('queue')
  const data = 'Correct Data'
  function cbOk (errorMessage, data) { }
  const cbOkSpy = sinon.spy(cbOk)

  const twilioAPICreateQueueStub = sinon.stub(
    twilioAPI,
    'createQueue',
    (Model, values, number, callback) => {
      callback(null, data)
    }
  )

  createMethod.bind(connector, Model, {}, cbOkSpy)()
  t.ok(twilioAPICreateQueueStub.calledOnce)
  t.ok(cbOkSpy.calledOnce)
  t.ok(cbOkSpy.calledWith(null, data))

  twilioAPICreateQueueStub.restore()
  t.end()
})

test('Create Account Error Case', function (t) {
  const Model = server.getModel('account')
  const errorMessage = 'Error'
  function cbError (errorMessage) { }
  const cbErrorSpy = sinon.spy(cbError)

  const twilioAPICreateAccountStub = sinon.stub(
    twilioAPI,
    'createAccount',
    (Model, values, callback) => {
      callback(errorMessage)
    }
  )

  createMethod.bind(connector, Model, {}, cbErrorSpy)()
  t.ok(twilioAPICreateAccountStub.calledOnce)
  t.ok(cbErrorSpy.calledOnce)
  t.ok(cbErrorSpy.calledWith(errorMessage))

  twilioAPICreateAccountStub.restore()
  t.end()
})

test('Create Account Success Case', function (t) {
  const Model = server.getModel('account')
  const data = 'Correct Data'
  function cbOk (errorMessage, data) { }
  const cbOkSpy = sinon.spy(cbOk)

  const twilioAPICreateAccountStub = sinon.stub(
    twilioAPI,
    'createAccount',
    (Model, values, callback) => {
      callback(null, data)
    }
  )

  createMethod.bind(connector, Model, {}, cbOkSpy)()
  t.ok(twilioAPICreateAccountStub.calledOnce)
  t.ok(cbOkSpy.calledOnce)
  t.ok(cbOkSpy.calledWith(null, data))

  twilioAPICreateAccountStub.restore()
  t.end()
})

test('Create With Invalid Model', function (t) {
  // To invoke the default clause in create.js we pass an invalid model name
  const Model = 'invalid'
  const errorMessage = new Error()
  function cbError (errorMessage) { }
  const cbErrorSpy = sinon.spy(cbError)

  createMethod.bind(connector, Model, {}, cbErrorSpy)()
  t.ok(cbErrorSpy.calledOnce)
  t.ok(cbErrorSpy.calledWith(errorMessage))

  t.end()
})
