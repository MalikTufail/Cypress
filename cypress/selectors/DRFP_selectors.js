const selectors = {
    signIn :{
        emailPlaceholder:'input[placeholder="Username"]',
        passwordPlaceholder:'input[placeholder="Password"]',
        email_errorPlaceholder: 'ul[class="m0 px3 py1 small red"]',
        pass_error1Placeholder:'ul[class="m0 px3 py1 small red"]',
        pass_error2Placeholder:'div[class="ui red message"]',
        email_errorMsg:'Please enter a valid email address',
        password_errorMsg1:'Please enter a password',
        password_errorMsg2:'Sorry, the user ID or password you entered is incorrect.',
        incorrect_userName:'alpa',
        incorrect_userPass:'beta',
        signIn_button:'button[class="ui button positive"]',
        logo: '[class="two wide column"]'
    },
    createNew :{
        create_RFPmenu:'#create-rfp',
        RFP_name:':nth-child(1) > .ui > .block',
        RFP_Project:':nth-child(2) > .ui > .block',
        welcomeMessage:':nth-child(3) > .ui > .block',  
        createRFP_btn:'div.right div .ui'
    },
    homesection: {
        homeMenu: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(1) div.content div.text',
        assertRFP : '[class="ui header"]',
        progress: 'div.three.wide.column > div.rfp-progress-text.flex-end > strong',
    },
    aboutSection: {
        aboutMenuText: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(2) div.content div.text',
        crossIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(2) div.content div.step-icon i.remove',
        aboutMenu : 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(2)',
        about_name: 'form div div.ui div:nth-child(2) div div.field div.ui input[type="text"]',
        about_project_id : 'form div div.ui div:nth-child(3) div div.field div.ui input[type="text"]',
        newServiceType: 'div.ui div:nth-child(5) div div.transition-all div.ui input[type=text]',
        welcomeMessage : 'div.ui div:nth-child(6) div div.field div.ui textarea',
        internalUse: 'div.ui div:nth-child(7) div div.transition-all div.ui textarea',
        laundDateField: ':nth-child(1) > :nth-child(1) > .field > .core_appear-layout > .core_accessory-layout > .left > [style="padding: 1rem; cursor: pointer;"]',
        launchSelectDate: '.react-date-picker__month-view-day--today > .react-date-picker__month-view-day-text',
        launchOkBtn : 'div.core_appear-layout button:nth-child(2).button',
        closeDateField: ':nth-child(2) > :nth-child(1) > .field > .core_appear-layout > .core_accessory-layout > .left > [style="padding: 1rem; cursor: pointer;"]',
        closeSelectDate: '.react-date-picker__month-view-day--today > .react-date-picker__month-view-day-text', 
        // '.react-date-picker__month-view-day--this-month > .react-date-picker__month-view-day-text',
        closeTime: 'form > div > div > div:nth-child(8) select',
        closeCountry: 'form > div > div > div:nth-child(8) select',
        closeOkBtn: '.rounded > .core_appear-layout > .ui',
        targetAwardField: ':nth-child(3) > :nth-child(1) > .field > .core_appear-layout > .core_accessory-layout > .left > [style="padding: 1rem; cursor: pointer;"]',
        targetSelectDate: '.react-date-picker__month-view-day--today > .react-date-picker__month-view-day-text',
        // '.react-date-picker__month-view-day--this-month > .react-date-picker__month-view-day-text',
        targetTime: 'form > div > div > div:nth-child(8) select',
        targetCountry: 'form > div > div > div:nth-child(8) select',
        saveAndContinue: 'button[title="Save & continue"]',
    },
    userAccess :{
        userMenu: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(3) div.content div.text',
        tickIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(3) div.content div.step-icon i.green',
        inviteName: "div.stackable div:nth-child(2) div div div div.text-left div:nth-child(2) div input.mb1",
        inviteEmail: "div.stackable div:nth-child(2) div div div div.text-left div:nth-child(4) div input.mb1",
        emailInviteBtn: 'div.stackable div.sixteen div div.text-left div.mar-t-3 button.light-green-button',
        assertName: 'div.grid div.wide div div div',
        continueBtn: 'div.group div.core_accessory-layout div.right div button.positive'
    },
    filesSection:{
        filesMenu: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(4) div.content div.text',
        crossIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(4) div.content div.step-icon i.remove',
        uploadBtn: 'div.mar-t-1 div:nth-child(2) button.light-green-button',
        selectAttachment: 'div.row div.sixtween div.drfp-pseudo-table div.ui',
        beforeReviewingBtn: 'div.content div:nth-child(2) button:nth-child(2).enabled',
        saveBtn: 'div.actions button:nth-child(1).light-green-button',
        saveAndContinue: 'div.visible div.mar-t-1 div:nth-child(3) button.light-green-button',
        tickIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(4) div.content div.step-icon i.green'
    },
    questionSection:{
        questionMenu: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(5) div.content div.text',
        crossIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(5) div.content div.step-icon i.remove',
        addServicetype: 'div.thirteen div div div div div.visible div.segment div div:nth-child(3) div button.positive',
        addServicetypeBtn: '.actions > .positive',
        addASection: 'div.thirteen div div div div div.visible div.segment div div:nth-child(5) div button.positive',
        addFirstSection: 'div.active div:nth-child(3).actions button.positive',
        sectionName: '#drfp-section-new-input',
        addButton: 'div.actions button:nth-child(1).button',
        sectionBody: 'div.section-row-container div.flex-between',
        weightage: 'div.section-row-container div.flex-between div:nth-child(2).flex-end span',
        addAnotherSection: 'div.thirteen div div div div:nth-child(2).visible div button.positive',
        expandQuestion: ':nth-child(2) > :nth-child(1) > .section-row-container > .flex-between > .flex-end > .circled-icon-layer-1',
        subSection: '[class="flex-end mar-t-1 mar-b-1 mar-r-2"] button:nth-child(1)',
        deleteSubSection : '[style="padding-left: 15px;"] .flex-v-center div',
        newQuestionBtn: '[class="flex-end mar-t-1 mar-b-1 mar-r-2"] button:nth-child(2)',
        message: '.b-eee',
        questionContainer: '[class="ui active modal modal-container"]',
        newQuestion: 'form div div:nth-child(3) div.ui textarea.block',
        multipleChoiceOpt: '[class="drfp-radio-group"] button:nth-child(1).enabled',
        opt1: 'div.fluid input[placeholder="New answer text"]',
        addNewAnswer: 'form div div button.positive',
        saveBtn: 'div.actions button:nth-child(1)',
        extraInstruction: ':nth-child(3) > :nth-child(1) > .mb4 > .ui > .block',
        deleteSection: 'div.actions button:nth-child(1).negative',
        savedOptBtn: 'form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > span.mar-r-hlf',
        addQuestionBtn: 'body > div:nth-child(7) > div > div.core_appear-layout.fill.visible > div > div.actions > button:nth-child(1)',
        expandSection: '//*[@id="solicitor-dash-container"]/div/div[3]/div/div/div[2]/div/div[2]/div/div/div[1]/div[1]/div/div[3]/div[1]/div/div[1]/div/div[2]/div',
        newQuestion2: 'div.core_appear-layout div:nth-child(3) div.section-row-container div.flex-end button.light-green-button',
        essayType: '[class="drfp-radio-group"] button:nth-child(2).enabled',
        essayInstruction: 'form:nth-child(2) div:nth-child(1) div.mb4 div.ui textarea.block',
        questionWeightage1: '#question-1 > div > div > div.right > div > span',
        expandQuestion1: 'div#question-1 div.core_accessory-layout div.right div.flex-end div.circled-icon-layer-1',
        scoreMessage: 'div#question-1 div.question-drag-handle-container div.visible div.warning',
        valueYes: 'div.grid div.sixteen div:nth-child(2).grid div:nth-child(1).row div.eleven div.ui input',
        score4: 'div.grid div.sixteen div:nth-child(2).grid div:nth-child(1).row div.four div.solicitor-score div:nth-child(5).solicitor-score-option',
        file: 'input[type="file"]',
        expandSectionQ2: 'div.core_appear-layout div:nth-child(3) div.section-row-container div.bb-ddd div.visible div#question-1 div.right div.flex-end div.circled-icon-layer-1',
        sec2Score4: 'div.core_appear-layout div:nth-child(3) div#question-1 div.visible div.stackable div.sixteen div:nth-child(2).grid  div.row div.four div.solicitor-score div:nth-child(5)',
        saveBtn1: 'div.left button.ui',
        continueBtn: 'div.right div button.ui',
        addQuestionModal: 'div[class="ui active modal modal-container"]' ,
        tickIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(5) div.content div.step-icon i.green'
    },
    pricingSection: {
        pricingMenu: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(6) div.content div.text',
        tickIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(6) div.content div.step-icon i.green',
        quantity: 'form div div:nth-child(2).field div.ui input[type="number"]',
        currentSpend: 'form div div:nth-child(3).field div.ui input[type="text"]',
        benchMark: 'form div div:nth-child(4).field div.ui input[type="text"]',
        addServiceBtn: 'div.flex-end div button',
        addedServiceModal: '#solicitor-dash-container > div > div:nth-child(3) > div > div > div:nth-child(1) > div:nth-child(3).centered',
        addedQuantity: 'div[id="0"] div:nth-child(2) div a.underline',
        addedCurrentSpend: 'div[id="0"] div:nth-child(3) div a.underline',
        addedbenchMark: 'div[id="0"] div:nth-child(4) div a.underline',
        customPricingTemp: 'div.shared_attachment_list_dropzone',
        saveAndContinue: 'div.right > div > .ui'
    },
    inviteSection: {
        inviteMenu: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(7) div.content div.text',
        crossIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(7) div.content div.step-icon i.remove',
        addBidder: 'div.grid div.sixteen div.stackable div.twelve.wide.column div:nth-child(1) button.positive',
        bidderModel: 'div[class="ui active modal modal-container"]',
        bidder1: 'div.sixteen div ul li:nth-child(1)',
        bidder2: 'div.sixteen div ul li:nth-child(2)',
        saveBtn: 'div.actions button:nth-child(1)',
        inviteBidderName: 'div:nth-child(2) > .ui > .block',
        inviteBidderEmail: 'div:nth-child(4) > .ui > .block',
        inviteBidderBtn: 'div.mar-t-3 button.ui',
        confirmBidder1: 'div.sixteen div.row div.twelve div.sixteen',
        inviteModal: '[class="four wide column"]',
        confirmBidder2: 'div.sixteen div:nth-child(2).row div.twelve',
        continue: 'div.right div button.ui',
        tickIcon: 'div.core_appear-layout div.ui div.sixteen div.stackable a:nth-child(7) div.content div.step-icon i.green',
    }
}
module.exports = selectors;