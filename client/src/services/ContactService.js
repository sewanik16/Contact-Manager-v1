import axios from 'axios'

class ContactService{
    static serverURL = `http://localhost:8000`

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`
        return axios.get(dataURL)
    }

    static getContact(contactid){
        let dataURL = `${this.serverURL}/contacts/${contactid}`
        return axios.get(dataURL)
    }

    static getGroups(){
        let dataURL = `${this.serverURL}/groups`
        return axios.get(dataURL)
    }

    static getGroup(groupid){
        let dataURL = `${this.serverURL}/groups/${groupid}`
        return axios.get(dataURL)
    }


    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts`
        return axios.post(dataURL,contact)
    }

    static updateContact(contact,contactid){
        let dataURL = `${this.serverURL}/contacts/${contactid}`
        return axios.put(dataURL,contact)
    }

    static deleteContact(contactid){
        let dataURL = `${this.serverURL}/contacts/${contactid}`
        return axios.delete(dataURL)
    }
}
export default ContactService;
