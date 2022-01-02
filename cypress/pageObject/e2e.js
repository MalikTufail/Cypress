import selectors from '../selectors/DRFP_selectors';
import rfp from '../fixtures/rfp.json';
import { uuid } from 'uuidv4';
require('cypress-xpath');
const contains = 'contain';
const value = 'have.value';
const select = 'select';
const visible = 'be.visible',
    disable = 'be.disabled',
    empty = 'be.empty';
class DRFP_e2e {
    signIntoRFP() {
        cy.visit('/');
        cy.get(selectors.signIn.emailPlaceholder).type(rfp.id);
        cy.get(selectors.signIn.passwordPlaceholder).type(rfp.password);
        cy.get(selectors.signIn.signIn_button).as('signIn').click({ force: true });
        cy.get(selectors.signIn.logo).as('logo');
        cy.get('@logo').should(visible);
    }
    createNewRFP() {
        cy.get(selectors.createNew.create_RFPmenu).should(contains, rfp.createMenu).click();
        cy.contains(rfp.createRadio).click();
        cy.get(selectors.createNew.RFP_name).type(rfp.rfp_name);
        cy.get(selectors.createNew.RFP_Project).type(rfp.project_Id);
        cy.get(selectors.createNew.welcomeMessage).type(rfp.welcomeMessage);
        cy.get(selectors.createNew.createRFP_btn).should(contains, rfp.create_button).as('createBtn').click();
    }
    homeSection() {
        cy.get(selectors.homesection.homeMenu).should($homeMenu => {
            expect($homeMenu).to.be.text('HOME');
        });
        cy.get(selectors.homesection.assertRFP).as('rfpname').should(contains, `RFP: ${rfp.rfp_name}`);
        cy.get('@rfpname');
        cy.get(selectors.homesection.progress).contains('0');
    }
    aboutSection() {
        cy.get(selectors.aboutSection.aboutMenuText).should($aboutMenu => {
            expect($aboutMenu).to.be.text('ABOUT');
        });
        cy.get(selectors.aboutSection.crossIcon).should(visible);
        cy.get(selectors.aboutSection.aboutMenu).click();
        cy.get(select).eq(0).select(rfp.company);
        cy.get(selectors.aboutSection.about_name).should(value, rfp.rfp_name);
        cy.get(selectors.aboutSection.about_project_id).should(value, rfp.project_Id);
        cy.get(select).eq(1).select(rfp.serviceType);
        cy.get(selectors.aboutSection.newServiceType).first().should(value, rfp.serviceType);
        cy.get(selectors.aboutSection.welcomeMessage).should(contains, rfp.welcomeMessage);
        cy.get(selectors.aboutSection.internalUse).type(rfp.internalUse);
        cy.get(selectors.aboutSection.laundDateField).click();
        cy.get(selectors.aboutSection.launchSelectDate).click();
        cy.get(select).eq(2).select(rfp.launchTime);
        cy.get(select).eq(3).select(rfp.country);
        cy.get(selectors.aboutSection.launchOkBtn).click();
        cy.get(selectors.aboutSection.closeDateField).click();
        cy.get(selectors.aboutSection.closeSelectDate).click();
        cy.get(selectors.aboutSection.closeTime).eq(0).select(rfp.closeTime);
        cy.get(selectors.aboutSection.closeCountry).eq(1).select(rfp.country);
        cy.get(selectors.aboutSection.closeOkBtn).click();
        cy.get(selectors.aboutSection.targetAwardField).click();
        cy.get(selectors.aboutSection.targetSelectDate).click();
        cy.get(selectors.aboutSection.targetTime).eq(0).select(rfp.closeTime);
        cy.get(selectors.aboutSection.targetCountry).eq(1).select(rfp.country);
        cy.get(selectors.aboutSection.closeOkBtn).click();
        cy.get(selectors.aboutSection.saveAndContinue).should(contains, 'SAVE AND CONTINUE').click();
    }
    userSection() {
        cy.get(selectors.userAccess.userMenu).should($userMenu => {
            expect($userMenu).to.be.text('USER ACCESS');
        });
        // cy.get(selectors.userAccess.inviteName).type(rfp.inviteName)
        // cy.get(selectors.userAccess.inviteEmail).type(rfp.inviteEmail)
        // cy.get(selectors.userAccess.emailInviteBtn)
        //     .should(contains, "EMAIL INVITE").click()
        // cy.get(selectors.userAccess.assertName).contains(rfp.inviteName)
        cy.get(selectors.userAccess.continueBtn).click();
        cy.get(selectors.userAccess.tickIcon).should(visible);
    }
    filesSection() {
        cy.get(selectors.filesSection.filesMenu).should($filesMenu => {
            expect($filesMenu).to.be.text('FILES');
        });
        cy.get(selectors.filesSection.crossIcon).should(visible);
        cy.get(selectors.filesSection.uploadBtn).click();
        cy.get(selectors.filesSection.selectAttachment).eq(3).click();
        cy.get(selectors.filesSection.beforeReviewingBtn).click();
        cy.get(selectors.filesSection.saveBtn).click();
        cy.get(selectors.filesSection.saveAndContinue).click();
        cy.get(selectors.filesSection.tickIcon).should(visible);
    }
    questionSection() {
        cy.get(selectors.questionSection.questionMenu).should($questionMenu => {
            expect($questionMenu).to.be.text('QUESTIONS');
        });
        cy.get(selectors.questionSection.crossIcon).should(visible);
        cy.get(selectors.questionSection.addASection).click();
        cy.get(selectors.questionSection.addFirstSection).click();
        cy.get(selectors.questionSection.sectionName).then($empty => {
            if ($empty.is(empty)) {
                cy.get(selectors.questionSection.addButton).should(disable);
            }
        });

        cy.get(selectors.questionSection.sectionName).type(rfp.sectionName);
        cy.get(selectors.questionSection.addButton).click();
        cy.get(selectors.questionSection.sectionBody).should(contains, rfp.sectionName);
        cy.get(selectors.questionSection.weightage).should(contains, '100%');
        cy.get(selectors.questionSection.addAnotherSection).click();
        cy.get(selectors.questionSection.sectionName).type(rfp.sectionName2);
        cy.get(selectors.questionSection.addButton).click();
        cy.get(selectors.questionSection.message).should(contains, rfp.successMessage);
        cy.get(selectors.questionSection.weightage).should(contains, '50%');
        cy.get(selectors.questionSection.expandQuestion).should(visible).click();
        cy.get(selectors.questionSection.subSection).should(visible).click();
        // if(cy.get(selectors.questionSection.sectionName).should(empty)){
        //     cy.get(selectors.questionSection.addButton).should(disable)
        // }

        cy.get(selectors.questionSection.sectionName).then($empty => {
            if ($empty.is(empty)) {
                cy.get(selectors.questionSection.addButton).should(disable);
            }
        });
        cy.get(selectors.questionSection.sectionName).type(rfp.subSection);
        cy.get(selectors.questionSection.addButton).click();
        cy.get(selectors.questionSection.message).should(contains, rfp.message);
        cy.get(selectors.questionSection.deleteSubSection).should(visible).click();
        cy.get(selectors.questionSection.deleteSection).click();
        /// Message should be "Delete successful!"
        cy.get(selectors.questionSection.message).should(contains, rfp.message);
        cy.get(selectors.questionSection.newQuestionBtn).click();
        cy.get(selectors.questionSection.questionContainer).within($resp => {
            cy.get(select).select('General');
            cy.get(selectors.questionSection.newQuestion).type(uuid());
            cy.get(selectors.questionSection.multipleChoiceOpt).click();
            cy.get(selectors.questionSection.opt1).type('Yes');
            cy.get(selectors.questionSection.addNewAnswer).click();
            cy.get(selectors.questionSection.message).should(contains, rfp.message);
            cy.get(selectors.questionSection.opt1).type('No');
            cy.get(selectors.questionSection.message).should(contains, rfp.message);
            cy.get(selectors.questionSection.addNewAnswer).click();
            cy.get(selectors.questionSection.extraInstruction).type(rfp.extraInstruction);
            cy.get(selectors.questionSection.saveBtn).click();
        });
        cy.get(selectors.questionSection.addQuestionModal).then($modal => {
            if ($modal.is(visible)) {
                cy.get(selectors.questionSection.addQuestionBtn).click();
            }
        });
        cy.get(selectors.questionSection.questionWeightage1).should(contains, '100%');
        cy.get(selectors.questionSection.expandQuestion1).click();
        cy.get(selectors.questionSection.scoreMessage).should($score => {
            expect($score).to.be.text(rfp.scoreMessage);
        });
        cy.get(selectors.questionSection.valueYes).should(value, 'Yes');
        cy.get(selectors.questionSection.score4).click({ force: true });
        cy.get(selectors.questionSection.file).attachFile('attachments/Questions (3) (2).csv');
        cy.xpath(selectors.questionSection.expandSection).click();
        cy.get(selectors.questionSection.newQuestion2).click();
        cy.get(selectors.questionSection.questionContainer).within($resp => {
            cy.get(select).select('General');
            cy.get(selectors.questionSection.newQuestion).type(uuid());
            cy.get(selectors.questionSection.essayType).click();
            cy.get(selectors.questionSection.essayInstruction).type(rfp.essayInstruction);
            cy.get(selectors.questionSection.saveBtn).click();
        });
        cy.get(selectors.questionSection.addQuestionModal).then($modal1 => {
            if ($modal1.is(visible)) {
                cy.get(selectors.questionSection.addQuestionBtn).click();
            }
        });
        cy.get(selectors.questionSection.expandSectionQ2).click();
        cy.get(selectors.questionSection.sec2Score4).click();
        cy.get(selectors.questionSection.saveBtn1).click();
        cy.get(selectors.questionSection.continueBtn).click();
        // cy.get(selectors.questionSection.tickIcon).click()
    }
    pricingSection() {
        cy.get(selectors.pricingSection.pricingMenu).should(contains, 'PRICING');
        cy.get(selectors.pricingSection.tickIcon).should(visible);
        cy.get('select').select('IP');
        cy.get(selectors.pricingSection.quantity).type(rfp.quantity);
        cy.get(selectors.pricingSection.currentSpend).type(rfp.currentSpend);
        cy.get(selectors.pricingSection.benchMark).type(rfp.benchMark);
        cy.get(selectors.pricingSection.addServiceBtn).click();
        cy.get(selectors.pricingSection.addedServiceModal).then($pricing => {
            if ($pricing.is(visible)) {
                cy.get(selectors.pricingSection.addedQuantity).should(contains, rfp.quantity);
                cy.get(selectors.pricingSection.currentSpend).should(contains, rfp.currentSpend);
                cy.get(selectors.pricingSection.addedbenchMark).should(contains, rfp.benchMark);
            }
        });
        cy.get(selectors.pricingSection.customPricingTemp).attachFile('attachments/test-questions-history (2).xlsx');
        cy.get(selectors.pricingSection.saveAndContinue).click();
    }
    inviteSection() {
        cy.get(selectors.inviteSection.inviteMenu).should(contains, 'INVITES');
        cy.get(selectors.inviteSection.crossIcon).should(visible);
        cy.get(selectors.inviteSection.addBidder).should(contains, 'ADD BIDDER').click();
        cy.get(selectors.inviteSection.bidderModel).within($bidderModal => {
            expect($bidderModal).to.exist;
            cy.get(selectors.inviteSection.bidder1).click();
            cy.get(selectors.inviteSection.bidder2).click();
            cy.get(selectors.inviteSection.saveBtn).click();
        });
        cy.get(selectors.inviteSection.inviteModal).within(() => {
            cy.get(selectors.inviteSection.inviteBidderName).type(rfp.inviteName);
            cy.get(selectors.inviteSection.inviteBidderEmail).type(rfp.bidder_Email);
            cy.get('div:nth-child(8) div:nth-child(2) select').select('8X8');
            cy.get(selectors.inviteSection.inviteBidderBtn).should(contains, 'SAVE').click();
        });
        cy.get(selectors.inviteSection.confirmBidder1).should(contains, rfp.bidder_Email);
        cy.get(selectors.inviteSection.inviteModal).within(() => {
            cy.get(selectors.inviteSection.inviteBidderName).type(rfp.mansoor_test);
            cy.get(selectors.inviteSection.inviteBidderEmail).type(rfp.bidder_Email2);
            cy.get('select.core_dropdown').select('AT&T');
            cy.get(selectors.inviteSection.inviteBidderBtn).should(contains, 'SAVE').click();
        });
        cy.get(selectors.inviteSection.confirmBidder2).should(contains, rfp.bidder_Email2);
        cy.get(selectors.inviteSection.continue).click();
    }
}
export default new DRFP_e2e();
