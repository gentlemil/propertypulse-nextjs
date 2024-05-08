<p align="center">
    <img width="200" src="./assets//images/logo.png" alt="Property Pulse Logo">
</p>

<h1 align="center">Property Pulse</h1>

## Description

[Property Pulse](https://propertypulse-nextjs-mb.vercel.app/) is a accommodation booking application created in [NextJS](https://nextjs.org/) (the JavaScript framework for React) with a non-relational [MongoDB](https://www.mongodb.com/) data platform.

### Provided functionalities

```bash
√ Next Authentication (via google provider)
    1. sign in,
    2. sing out,
    3. keep user session,
    4. update user profile,
√ Managing properties
    1. properties listing,
    2. create and update propertie,
    3. remove property
    4. search properties
√ Messaging system
    1. sending,
    2. receiving,
    3. marking as read,
    4. delete,
√ Storing properties' images in cloudinary service,
√ Sharing properties (facebook/twitter/whatsapp/email),
√ Display properties location (via mapbox)
√ Bookmarking properties,
and few more...
```

## Installation and running the app

Clone the repository:

```bash
$ git clone https://github.com/gentlemil/propertypulse-nextjs.git
```

Switch to the repo folder:

```bash
cd propertypulse-nextjs
```

Install dependencies:

```bash
$ npm install
```

Create an **.env** file and provide your own generated private keys for specific proeprties. Check the template below:

```bash
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api

# https://www.mongodb.com
MONGODB_URI=

# https://console.cloud.google.com
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_URL_SECRET=

# https://cloudinary.com
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# https://www.mapbox.com/
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=

```

Generate NEXTAUTH_URL_SECRET key by running the following command in the terminal:

```bash
openssl rand -base64 32
```

Now that we have created our project, we can run it. To do this, run the following command:

```bash
$ npm run dev
```

## Running the Project

```bash
npm run dev
```

Enjoy!
