const mockServer = require('mockserver-node');
const client = require('mockserver-client').mockServerClient;
const port = 1080;
const verbose = process.env.VERB ?? false;
const trace = process.env.TRACE ?? false;

export function startMockServer(expectations: any): Promise<void> {
  return mockServer
    .start_mockserver({ serverPort: port, verbose, trace })
    .then(() => {
      // @ts-ignore
      client('localhost', port)
        .mockAnyResponse(expectations)
        .then(
          () => {
            console.log('Mock Server started, expectations successfully loaded');
          },
          (error: any) => {
            console.error('Mock Sever did not start, error:',error);
          }
        );
    });
}

export function stopMockServer(): Promise<void> {
  return mockServer.stop_mockserver({
    serverPort: port
  });
}
