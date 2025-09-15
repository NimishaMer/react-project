import React from "react";

import {
    FaLongArrowAltLeft,
    FaEllipsisV,
    FaHeart,
    FaCheck,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";
import "./UserProfileCard.css";

export default function UserProfileCard() {
    return (
        <div className="app">

            <div className="wrapper">
                <div className="top-icons">
                    <FaLongArrowAltLeft />
                    <FaEllipsisV />
                    <FaHeart />
                </div>

                <div className="user">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PEBAPEA8QFRUPDxAPEA8PEBUQFRUWFhYRFRUYHSggGBolGxUWIjEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGhAQGzIiHx8tLS0vKy0tLTArNS0tMS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EAEAQAAEDAgMEBwYFAgMJAAAAAAEAAhEDIQQSMQVBUWETIjJxgZGxBhRCocHRUmJy4fAjsjOCkgckNENTg8LS8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACQRAQACAgICAQUBAQAAAAAAAAABAgMRITESQQQTIiNRYTIU/9oADAMBAAIRAxEAPwDqklIhEKyqBSU4SIQRhIqSSCCRCmQooIwlCmkQgjCUKSECQVGrVDRJMd6rsTtYNFmwPxOkNVbXiva1azbpZygLlMVtp5IaHWN+oInxK3W5nNzNe9p73EeJXOc9YdIw2dBCa5ahtyrTdFTrt0m3yd9CukwuJZVbmYZG/iDwIXSt4t052pNe2YJhATVlQpBCYQAUgEAKUIFCcICaBQmhNAkJoQQKUKSEEUoUikgiQokKaRCCBShShBQQhIqSEEEnWUlpbSqGBSbq+7jwYPuqZL+NdrUr5TpVY7FFxOWCBq51mhV+KmsBlLXgfh/+pHBOxuJ92YS3DUP8YttmdvHfNvBd/s/ZNOm0MYwAC1v5dYLX3P8AXo0x8PMMfTq035mUXPHIFdBgccH0Q7KWuFnNIII+oXfNwLQOyJ7lTbb2YMpe1oDt/NRaZiOVopE9OExjJJi06cD3hZNk411F+/Lo5p1HI8uBWzicN/p5ag8R6+a1hRLpEDpGW5OHDuO7gr1trmHG1fUu1pPDgHC4NwsipfZ2vbo7xq2deYV2At1LeUbYr18Z0ApAICYVlTCkkE0AmkmgEITQJCaEEElKFFAFJMpIBIoQgSiVJJBFJSSQRAkqk21ihRp1a7ozPswfkGg8VeRZ0axlHe6y4P8A2iYqXtpN7NICR+Y/tPmsuf7rRVpwcRNnUewmEyYQVD26zzUJ4/y67GgLLjtj457cFgxSayeiBc6oSGDdFrkzNhwWfCe0WJFQNqUWOp76lIutzIcsnuZb/UQ7JaWLE23KNXFgMzzbWVxmMxmJqPc99R1GgOyGvZT6s2LnH0UzPlwRXx5bWOw4bULNz+z3qqqUDZwBzMkEDUt3jwi3cFjpbQoVbUq1V1RsGHv6QTxBVo++V4tnEHk8a/fwUV44lTJG+YYsNAc2o2LkTGmaNfELoGGRK5+iwNc5hs12kfCQZIHcTmHIngrvBklonUWI5havj21OmPPXjbOFIJBMLWzJBCAhAJoTQCYCSaATQhBilKUJFECUJIRISlCSAQkmgSSkkgm05Wlx0Eu8hb1XlO3q3SVKjj8Ux4mB8l6btUn3dwGpEeG/1XmW06F37sp9ASsV5/JLbjj8brtgYD3vZlCmXuYW52ywwbPdY8oVhsr2UZSqdIDkERkZIbo0ExN+zPibp/7OY9zA/C948zm9CF1Feu0ANEZjpw7zyXGbTEzDVFImIlobUphuHDb3Nu7gsD9k0q9EAszS3Kc1xbeOdtVtbfqM6AuNRrQ3rZpGWOMrX2FtNuUtJBgjrDSCAZVf82X8fKqpwfspRoOFQDsDK3TszMeawVMSG1XUzADjLeAcLrqNpVQWmN/BcDtx0OzTGWNdNRdRHNuS1Yii9qUpvvB3/iHZPcRY9ys8JdocJvrPEftHkVWbOrNcA0kGWiRIMjcforXZjbFp1uPqD6+a7Y51aJZMkbrMMqkEkwvQYDQEIQNNJMIGmkhA0IQgwFKUiUkQZQkUSgCkhCJCaAhA1EqSSCNduZpHELl9s7GEu4PP0Fl19Nkgjkf581rYnDdLSjfp/mH7QsGaNXluwzuiq9kGZBVoA8KjfR3/AIqxfifdy6pWa8tJjO1uZrfwh0XA56LmMXiamFqtqNHZOYjiPib6/JdxszFU8RTFRsPY4aH0I4hcdbnbXS+o0qto4TphAbWYPwhhIO+1rcVT4naIwrQxlJ7nu7LGg53GBuI5i/Ndc1tUSG9n4es+w3DVVr8IQ/M65Fyd37pMViHWCwuGf0TXVOoXf8uc2WxME8bblyftoMmHqOGsR3kmF12JxBsNA0STzP8APmvOvbjaXSVKdBvYALz+Zx6oPcL/ADTFH3OOa32sHsxtE0nUybU3ATydJHl1fkF6dSqxleLtcPt/PFeUYTD5nU6bdAIEby43PyXoWx8zaYpOk3AbyMTHku1+2WOl9MlSCgwQAprfHTDITSTCACYSCkgEIQgE0kINYoQUpRAQhCJCIQmgAhCEAhBQg28Cyc06Aeqhh3jM6kddWniPusXSltN5Gqq8Q5xLHNMOFwTp4rBmt+XTdhr+LbY2rs8VgbCW37wucwWJdgK4LJdReQ2pTJtrFuY+c3XW1qggOGiosdhA4zqJBPK+q42nxl2p90Ono7WpuEtMg35+S08ZigZIsFpbMoSwcpB8CpYphAK5/UmXfWmhjq5cI0C819qGu95LtwaB3Xn0JXpL6c7lVu2EytXIqAFjoBBCtiv423Lnlr5VVHstTBqsLjIkAfM/VdxRbD2xp0n9rQPqFS09h0sPVy06lgbAmQINrwreg+S3fHWndcj7Bdt7lwmNQtgmEybDmkF6ETt58xo0wkhSGE0kIGhJNA0IQg1kiglJEBASTCJSQhCAQhCBpATZNXuysAGtFR3adcTuB08UFfQ2c+DmADSIIOsKuqYMtcRMjlqOa6t7cp6t5+E6fsudx1XK4tc10/AQLb5usfyK8xb214LcTX00/d3MYxhuZdJ5EmPlC0MU0gtH4tPorPD7Sa6zs4uBDgHXJgQVjxYYYIiBoYhYrW3y20rrhk2IyA4cbhbWIoyJ8kbOaALfwreqMEAKlYdLdqQYVYK7RRd0zhLWiT9lemiN5WPEYNr2lgaSXaDW/creMqzMOYqY11U5gwAu7MuHmsmydh4svc8kOE6uJb4TeV12A9nKbA0uYzOLxAcAeI5qw6HKI17hC1YvjzPNmTL8iOqudr0KlNoLhbSW9YDv4LGwnUwQdCPRdBUB0IEHURIVZXwIpguZ2N4kkj9lris166ZJmLNZCiCmurmaaSEDQkmgaEkINdJSIShEFCYQmESEJpFAIQE0G3srC9JUAPZb1nd3BdBWqZX34Q2dOaw7Bw+WkCdX9bw3D+cVuYugHNI8fFVtv0tDE+OrJHGVT4+qHlzG3k3IW9X2eAO2/umyy0cAIBETyFlwvW9+Onak0rz2p6eycwIHVJBgi5B0BVc3ZheQHdVjbBs3Mcf5+/cU2wFSY6mBUf35vO/rK4Z8MVrDT8fNM2mJabIaIAU85SLFs4LAmoZ0YNTx5BZ61mZ1DTe1axuWtSwz6hhu7UnQK8wWDFMWu7e4/QblsMptYAAAANyi509y9DFginPt52X5Fr8R0HO8ef2WMhSTaF2Z2pUYTYDx0CxilGpB4iN3Arbqn+fVarzZSKPE0wx7mjQadxErEs2OP9R/fHkAsClCSEk0DQkE0AhCEGIIQChEBAQlKJNJBKUoGnTYXENGpMDvUZVz7PYWSapFh1W9+8+VvFBfUWZWtaNGwB3Cyk/ghqlTbqeZVVmGrTzCPJa+HeWktO7+St4hYa1EG+8b0EhVtofJUm2KmWvTH/UYY72OH/uruiToUq1JpLHZQXtnKSASJ1jhoFzy0866XxZPC3krcJs5zoLxDeHxH7KzBAEAaWAFgFJrOcp5Ux460jgyZLXnliIJ1ThSKiT5rq5oO8t5PAcVJgtpHLgNwUKw7LB8Rlx/KLn6DxWQ3UJYKxWo4rbraLRqHU8JKlCkrul7zxcfVQUZRKlCaajKEEk5UUIJISSQQSlCSBylKSEDSSlEoJsBJAGpMDvK6eliWURRphrntJ6MvpjM1roJl28yeEqi2ThelqAHsi7jyEW8Z9Vf1q1IU2vDm9E0jrNIywDG7XhCiUt5jgYIMg3CyCoFp4ZxDAXWJl5B1GZxOU8xMLF74wHtechV3ELRWZ6WUoWGnUBUy9ShGYKzAb1hOoUy6yCaSjmUXVEDcVgdVAk8NO9QrV4WrWqdVp4zCDZpy45uEtHjBJ8IWfMFGiIA5BTddBrYh1lo1+y79J9Fu4haGI0d3H0UoUMpyohEqUJgpyogpoJShKUIJShJCDGkhCBIQkgacICz4Gh0lRrd2rv0i5QXGz8ExtFrnyHulwLHPZUDbWBYQ6LAwudwNClRrMFAufhw41aWY1Q1ldziHNynqwZLgYzSHSbrrKNFwpufY1XiRPZFuqwcAFzFTEND3UbdI3I89WBGZxcRu+D0G8TnzXmvTTgxRbcz6XTq5NnEzu3LRrB28zwP0W1h6oqNBkHmoV6RCy2mZ5bKxEcN7ZeIlgG9vVPgt7pLrnMHXNN/5TZ33V7RIcQQZC14rxarFmxzS38bjakqNSpcDjKhTWrUf/U7mrq4tvpVrVqpJAbvUC/U8BKeFF54BBhxDteRDfISfmVne3qD8on5LVYx1SMoJkuceABd9gs+K6VoeYDQLCSCT3Ks21G1603OmTE7QbTaCbktDg0RJstqi/O1rho4A+aoNl7PZXeeldnyAEsDjF9ATv0PkulIgWFuSrjtNufTpmpXHqsd+2rXHFaGMbDXfpPoVtYisZhauNd1H/pd6FdWdziJSQpQkCpArGmCgySiVCU5QTlChKECQokpSgkgKMolBKVc+zVOXvd+EAeZ/ZUkro/Zhv8ATeeLo8gPugntxzcPRdU94fRGjG/0nB1R3ZpsD2OJJMANE8guKpsxIxHvTqdR1F9LLJAdUJJaXOc1ggOJBJAsLb5jujsOg7Fe9vBqVQzIzpCXspt0IptNmTqSLlbvQAG4HLQBc708o0648k0ncPP9hUMQ1+IqAf7uXSxpBnMB1i38uniO+eiw+KDh1rFXtfLBA6OfzOyj0XL7awEy6nWwtM8cxdf/AFBcL4dRxLTXP5TPlDdext+a1+jI7Lj4GFzVT2i92tWrUKwFiaZqNd5OBB/1BW2zNr4bEiaVRpO8AiR3hZrVmGitolv9JVbo93dmKj71UBJmSbGQCmZG+VDpeIVfO0e1vCs+kzjqhEQ2/I/dbGCxFV72s6oDjcgXjUrT6ULZ2fiQ2owmwm55G0/NXrltMxuVL4qxWdVdLSpBoAaIAsAOCi9od1TfeswWuw9d4/THcZ+y9J5Z02tBLQAI4CE3khY8Q0h2ceKlUlwkINOsZMqvx1WGP5gjzst6q6AqHa1Xst49Y+g+qDRlEqMoUoSlOVjlOUE5TlQlEoMkoWOU0CJSlQlAKJTRKjKcoHK6D2XrWqM3gh/gRB9B5rnSVmwOLNKoH3i4cB+EiD9/BB2VXFQQBxuVT+0OErVnMeDnoUwc1FsipnPx/mETYcTru3MJWFVkiIO8cUUXOY65vuO48lzvXyjS9LeFvKHOU202jqsaByaAsoeDaFc7UwTXjpKTZdq+mO0fzAcfVUjYvG6xEQQeBC8zJjtSdS9bHkrkjcI19nUqghzQfAKjx3sm0nPRJY8aFpgzyIXSNaCsjKPNRG/SZmPbj6e1MdherWYa1MfE2zwPQ/JXWztvUa/Zd1t7XdV47wVcvwwO8HvErQxWwcPUBloa7c5vVcDxBGit32rxDOKjSpZWlVBwFejpU6Vu7N2wO/f4qDsY5o61o4qsxpaJ273ZGMzsyE9dgjvbuK26vFoBNgeMLzvC7cdSeHtIkbjoQdxXZbK23QxIsYqDtMm47jvC34cvlGp7ednwzWfKOliDM/Na+OxPRsGUS7RjfqeSniMS1jcx0+ZKr6+0GFuYB0xFwFoZlc/EOAhzsztSd6q8XWzO7hlCeLxXWIFuf2WpKklklErHKJRDJKUqEolBkzIzLHKJQZMyFCUIGhQlMFEpBNRlRLkEiVjLkiVGUGxhsW+mZYY4jUHvCtaW3we2097bqjW7sbDCpXptOkk+QJj5IOnbVblBeQ0HQu6sJVqLakBobUfxJggc3C8KxbhGtEEBx53CnRpsZOQNGYy4iASearMRPaYmY6UdbY7mtnMAeAzETwBiT5LSqYPEgw2kXDiXhvygrqnGbjXTVQErlOGjtGe8e3KuwWM3UgP+7PyDVgdgcUO1THg4rtA8ILgU+jU+vdwzsNUGrD5ysXuLXksMh+sHRdy6g07gtbE7Pa68QRoQn0afpP8A0X/bgsRhDSqZazXNpns1GEEHvtZWmzGU6VSbmm8XIPWBHxDn91fVMKHNNOoJHNc9jNnOokhslhuFNcda9QrbNa8amV50jasvvYwAT8PHvWrjf6Qk3aeqIF7yb+S0MDXLYJ0mD9lcV6Yq0y38QgfqFx810hyc1UfJJ0kkqMqJco5lZDLKUrHmSzIMuZGZYsyMyDLmRmWLMjMiGbMhYsyEGRMIQiTKgUIQRKSEIJKy9nv+Jpf5v7HJIQdjitW9ywP0QhVSKC22oQgZWJ6SEE2aKZTQg0sRvWhtTs+CEIKEaHvHqrzB9hvgkhPY5jG/4lT9bv7isCEKyAkUkIBNCEAhCEAhCEQ//9k=" alt="profile" className="thumbnail" />
                    <div className="check">
                        <FaCheck />
                    </div>
                    <h3 className="name">Hannah Roy</h3>
                    <p className="title">Front-End Developer</p>
                    <p className="description">
                        A front-end web developer is responsible for implementing visual
                        elements that users.
                    </p>
                    <button type="button" className="btn">
                        Hire Me
                    </button>
                </div>

                <div className="social-icons">
                    <div className="icon">
                        <a href="/">
                            <FaInstagram />
                        </a>
                        <h4>98.5k</h4>
                        <p>Followers</p>
                    </div>

                    <div className="icon">
                        <a href="/">
                            <FaFacebookF />
                        </a>
                        <h4>44.5k</h4>
                        <p>Followers</p>
                    </div>

                    <div className="icon">
                        <a href="/">
                            <FaYoutube />
                        </a>
                        <h4>100k</h4>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
