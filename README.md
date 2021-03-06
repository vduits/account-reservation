# Account Reservation

Further details about this repo will follow on first release.

# Development notes

For development Visual Studio Code has been used for the front end and IntelliJ Idea for the backend.

First get PostgreSQL up and create the several configuration files from the integrations.

After that you can use ``npm install`` in the main [front-end folder](https://github.com/vduits/account-reservation/tree/develop/account-reservation-fe). Details can be found in the same folder using [angular cli](https://cli.angular.io/).

With angular cli you can run ``ng serve``, or you can use ``npm start`` which will do the same an d run the application at ``http://localhost:4200``. The java app will run by default at ``http://localhost:8048``.

The front-end will require the java backend to be able to render most pages due to relying on its endpoints.


## PostgreSQL
The backend requires a PostgreSQL instance to be active.
A docker-compose.yaml has been provided to start one through docker.
Within the folder in your favourite CLI use ``docker-compose up`` to start a PostgreSQL instance.

## Integrations
This service works with both Google and Discord OAuth providers. 
You will need to generate client-ids and credentials for both of these using the steps below.

### Google
You need to [create a google project](https://console.developers.google.com/projectcreate)
and then create [oauth credentials](https://console.developers.google.com/apis/credentials/oauthclient).

Pick Web application and ``http://localhost:4200`` as an authorized origin.

The result information will contain a uri that ends on ``.apps.googleusercontent.com``.
With both the project name and the client-id for OAuth you can create a google.ts file in the [environments folder](https://github.com/vduits/account-reservation/tree/develop/account-reservation-fe/src/environments)
and fill in the details in the format used at the [example file](https://github.com/vduits/account-reservation/blob/develop/account-reservation-fe/src/environments/google-example.ts).

### Discord
You need to create a [Discord Application](https://discordapp.com/developers/applications/) and then at OAuth2 create a redirect.

For local development that is ``http://localhost:4200/authentication``

The front-end will need a discord.ts file in [environment folder](https://github.com/vduits/account-reservation/tree/develop/account-reservation-fe/src/environments).
This should also be in the same format as the [example file](https://github.com/vduits/account-reservation/blob/develop/account-reservation-fe/src/environments/discord-example.ts).

The backend needs to contain your discord app its client-id and client-secret at [application.yaml](https://github.com/vduits/account-reservation/blob/develop/account-reservation-be/src/main/resources/application.yaml)

