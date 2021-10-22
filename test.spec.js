it("Delete an new user", ()=>{
    const user = {
        "user": {
            email:"testta@email.com",
            password: "testta"
        }
    }
    const title = "ustad zaki"

    cy.request('POST', 'https://api.realworld.io/api/users/login', user)
    .its('body').then(body => {
        const token = body.user.token

        cy.request({
            "url":'https://api.realworld.io/api/articles/',
            "headers":{ 'Authorization': 'Token ' +token},
            "method": 'POST',
            "body": {
                "article": 
            {
            "tagList": [],
            "title": title, 
            "description": "api call", 
            "body": "api call "
            }
        }
        })
        .then( response => {
           //expect(response.body.article.title).to.equal(title)
           cy.request({
            "url": `https://api.realworld.io/api/articles?limit=10&offset=0`,
            "method": 'GET',
            "headers":{ 'Authorization': 'Token ' +token},
        })
        // .then(upd => {
        //         const slug = upd.body.articles[0].slug
        //         cy.request({
        //             "url": `https://api.realworld.io/api/articles/${slug}`,
        //         "method": 'PUT',
        //         "headers":{ 'Authorization': 'Token ' +token},
        //         "body": {
        //             "article": {
        //                 "title": "ustad uzair", "slug": slug, "body": "api call ", "description": "api callqqq"}}
        //         })
        //     })
        .then(del =>{
                const slug = del.body.articles[0].slug
                cy.request({
                    "url": `https://api.realworld.io/api/articles/${slug}`,
                    "method": 'DELETE',
                    "headers":{ 'Authorization': 'Token ' +token},
                        })
            })
        })
        // 
        })
        })


    
