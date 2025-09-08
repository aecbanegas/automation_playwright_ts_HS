import { test } from '../fixtures/Article.fixture'
import { createBaseUser } from '../utils/Utils'
import userData from '../data/UserData.json' assert {type:'json'}
import articleData from '../data/ArticleData.json' assert {type:'json'}
import commentData from '../data/CommentData.json' assert {type:'json'}

test.describe.serial('Test Articles', async()=>{
    test.beforeEach(async function ({ page, signInPage , homePage}) {
        await createBaseUser(page,userData.createBaseUser.email,userData.createBaseUser.password,userData.createBaseUser.username)
        await homePage.accessSignIn()
        await signInPage.signInUser(userData.createBaseUser.email, userData.createBaseUser.password)
    });
    test('User is able to create a New Article - HP',
        { tag: ['@TC7', '@regression', '@SignUp']}, async function ({homePage,newArticlePage}){
            await homePage.accessNewArticle()
            await newArticlePage.createNewArticle(articleData.newArticle.title, articleData.newArticle.about, articleData.newArticle.article)
            await homePage.accessHome()
        }
    );
    test('User is able to edit an Article - HP',
        { tag: ['@TC8', '@regression', '@SignUp']}, async function ({homePage,newArticlePage, articlePage}){
            await homePage.accessFirstArticle()
            await articlePage.editArticle()
            await newArticlePage.createNewArticle(articleData.editArticle.title, articleData.editArticle.about, articleData.editArticle.article)
            await homePage.accessHome()
        }
    );
    test('User is able to Post Comments - HP',
        { tag: ['@TC10', '@regression', '@SignUp']}, async function ({homePage,articlePage}){
            await homePage.accessFirstArticle()
            await articlePage.postComment(commentData.commentContent)
        }
    );
    test('User is able to Delete Comments - SP',
        { tag: ['@TC11', '@regression', '@SignUp']}, async function ({homePage,articlePage}){
            await homePage.accessFirstArticle()
            await articlePage.deleteComment()
        }
    );
    test('User is able to delete an Article - SP',
        { tag: ['@TC9', '@regression', '@SignUp']}, async function ({homePage,articlePage}){
            await homePage.accessFirstArticle()
            await articlePage.deleteArticle()
        }
    );
})
