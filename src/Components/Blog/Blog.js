import React from 'react';
import { Figure } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>

                    <Figure>
                            <blockquote class="blockquote">
                            <h1></h1>
                                        <p>Authentication is about affirming our credentials to verify your identity.Authentication is usually done by a username and password, and sometimes in conjunction with factors of authentication, which refers to the various ways to be authenticated.</p>
                                        <p>
                                        Authorization refers to after out identification is successfully authenticated by the system, which ultimately give us full permission to access the resources such as information, files, databases, funds, locations, almost anything. In simple terms, authorization describe our competence to access the system and up to what extent.
                                        </p>
                            </blockquote>
                            <figcaption class="blockquote-footer text-primary">
                            Difference between Authentication and Authorization 
                            </figcaption>
                    </Figure>
            


                    <Figure>
                            <blockquote class="blockquote">
                            
                            <p>I use firebase to implement auhenticatin system on my project.There has a number of options to implement authentication.By using firebase i can create projet to host.</p>
                            <h6>Other options to implement authentication is given below</h6>
                            <p>1.Back4App</p>
                            <p>2.AWS Amplify</p>
                            <p>3.Kuzzle</p>
                            <p>4.Couchbase</p>
                            <p>5.NativeScript</p>
                            </blockquote>
                            <figcaption class="blockquote-footer text-primary">
                            Firebase use 
                            </figcaption>
                    </Figure>
            
            


                    <Figure>
                            <blockquote class="blockquote">
                            <p>The services Firbase provide is</p>
                                <p>1.Authentication</p>
                                <p>2.Firestore Database.</p>
                                <p>3.Realtime Database.</p>
                                <p>Storage</p>
                                <p>Hosting</p>
                                <p>Machine Learning</p>

                            
                            </blockquote>
                            <figcaption class="blockquote-footer text-primary">
                            Firebase services 
                            </figcaption>
                    </Figure>
        </div>
    );
};

export default Blog;