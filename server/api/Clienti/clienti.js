const Model = require('../../model/Cliente');

exports.getAllClients = async (req, res, next) => {
    try{
        const data = await Model.find().limit(100);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getClient = async (req, res, next) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.searchClient = async (req, res, next) => {
    try{
        const search = req.body;
        const page = search.page;
        const limit = search.limit;

        const query = {};

        if(search.CAP){
            const cap = search.CAP;
            if(cap.operation){
                query.CAP = {}
                switch(cap.operation){
                    case "not contains":
                        query.CAP["$nin"] = cap.value;
                        break;
                    case "equal":
                        query.CAP = cap.value;
                        break;
                    case "not equal":
                        query.CAP["$ne"] = cap.value;
                        break;
                    case "is empty":
                        query.CAP["$exists"] = false;
                        break;
                    case "is not empty":
                        query.CAP["$exists"] = true;
                        break;
                    default:
                        query.CAP = cap.value;
                        break;
                }
            }
        }

        if(search.Categoria){
            const categoria = search.Categoria;
            if(categoria.operation){
                query.Categoria = {};
                switch(categoria.operation){
                    case "not contains":
                        query.Categoria["$nin"] = categoria.value;
                        break;
                    case "equal":
                        query.Categoria = categoria.value;
                        break;
                    case "not equal":
                        query.Categoria["$ne"] = categoria.value;
                        break;
                    case "is empty":
                        query.Categoria["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Categoria["$exists"] = true;
                        break;
                    default:
                        query.Categoria = new RegExp(categoria.value, 'i');
                        break;
                }
            }
        }

        if(search.CodiceAgenzia){
            const codiceAgenzia = search.CodiceAgenzia;
            if(codiceAgenzia.operation){
                query.CodiceAgenzia = {};
                switch(codiceAgenzia.operation){
                    case "not contains":
                        query.CodiceAgenzia["$nin"] = codiceAgenzia.value;
                        break;
                    case "equal":
                        query.CodiceAgenzia = codiceAgenzia.value;
                        break;
                    case "not equal":
                        query.CodiceAgenzia["$ne"] = codiceAgenzia.value;
                        break;
                    case "is empty":
                        query.CodiceAgenzia["$exists"] = false;
                        break;
                    case "is not empty":
                        query.CodiceAgenzia["$exists"] = true;
                        break;
                    default:
                        query.CodiceAgenzia = codiceAgenzia.value;
                        break;
                }
            }
        }

        if(search.CodiceCliente){
            const codiceCliente = search.CodiceCliente;
            if(codiceCliente.operation){
                query.CodiceCliente = {};
                switch(codiceCliente.operation){
                    case "not contains":
                        query.CodiceCliente ["$nin"] = codiceCliente.value;
                        break;
                    case "equal":
                        query.CodiceCliente = codiceCliente.value;
                        break;
                    case "not equal":
                        query.CodiceCliente["$ne"] = codiceCliente.value;
                        break;
                    case "is empty":
                        query.CodiceCliente["$exists"] = false;
                        break;
                    case "is not empty":
                        query.CodiceCliente["$exists"] = true;
                        break;
                    default:
                        query.CodiceCliente = codiceCliente.value;
                        break;
                }
            }   
        }

        if(search.CodiceFiscale){
            const codiceFiscale = search.codiceFiscale;
            if(codiceFiscale.operation){
                query.CodiceFiscale = {}
                switch(codiceFiscale.operation){
                    case "not contains":
                        query.CodiceFiscale["$nin"] = codiceFiscale.value;
                        break;
                    case "equal":
                        query.CodiceFiscale = codiceFiscale.value;
                        break;
                    case "not equal":
                        query.CodiceFiscale["$ne"] = codiceFiscale.value;
                        break;
                    case "is empty":
                        query.CodiceFiscale["$exists"] = false;
                        break;
                    case "is not empty":
                        query.CodiceFiscale["$exists"] = true;
                        break;
                    default:
                        query.CodiceFiscale = new RegExp(codiceFiscale.value, 'i');
                        break;
                }
            }
        }

        if(search.Cognome){
            const cognome = search.Cognome;
            if(cognome.operation){
                query.Cognome = {}
                switch(cognome.operation){
                    case "not contains":
                        query.Cognome["$nin"] = cognome.value;
                        break;
                    case "equal":
                        query.Cognome = cognome.value;
                        break;
                    case "not equal":
                        query.Cognome["$ne"] = cognome.value;
                        break;
                    case "is empty":
                        query.Cognome["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Cognome["$exists"] = true;
                        break;
                    default:
                        query.Cognome = new RegExp(cognome.value, 'i');
                        break;
                }
            }
        }

        if(search.Contattabile){
            const contattabile = search.Contattabile;
            if(contattabile.operation){
                query.Contattabile = {}
                switch(contattabile.operation){
                    case "not contains":
                        query.Contattabile["$nin"] = contattabile.value;
                        break;
                    case "equal":
                        query.Contattabile = contattabile.value;
                        break;
                    case "not equal":
                        query.Contattabile["$ne"] = contattabile.value;
                        break;
                    case "is empty":
                        query.Contattabile["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Contattabile["$exists"] = true;
                        break;
                    default:
                        query.Contattabile = contattabile.value;
                        break;
                }
            }
        }

        if(search.DataAggiornamentoSaldo){
            const dataAggiornamentoSaldo = search.DataAggiornamentoSaldo;
            if(dataAggiornamentoSaldo.operation){
                query.DataAggiornamentoSaldo = {}
                switch(dataAggiornamentoSaldo.operation){
                    case "not contains":
                        query.DataAggiornamentoSaldo["$nin"] = dataAggiornamentoSaldo.value;
                        break;
                    case "equal":
                        query.DataAggiornamentoSaldo = dataAggiornamentoSaldo.value;
                        break;
                    case "not equal":
                        query.DataAggiornamentoSaldo["$ne"] = dataAggiornamentoSaldo.value;
                        break;
                    case "is empty":
                        query.DataAggiornamentoSaldo["$exists"] = false;
                        break;
                    case "is not empty":
                        query.DataAggiornamentoSaldo["$exists"] = true;
                        break;
                    default:
                        query.DataAggiornamentoSaldo = new RegExp(dataAggiornamentoSaldo.value, 'i');
                        break;
                }
            }
        }

        if(search.DataNascita){
            const dataNascita= search.DataNascita;
            if(dataNascita.operation){
                query.DataNascita = {}
                switch(dataNascita.operation){
                    case "not contains":
                        query.DataNascita["$nin"] = dataNascita.value;
                        break;
                    case "equal":
                        query.DataNascita = dataNascita.value;
                        break;
                    case "not equal":
                        query.DataNascita["$ne"] = dataNascita.value;
                        break;
                    case "is empty":
                        query.DataNascita["$exists"] = false;
                        break;
                    case "is not empty":
                        query.DataNascita["$exists"] = true;
                        break;
                    default:
                        query.DataNascita = new RegExp(dataNascita.value, 'i');
                        break;
                }
            }
        }

        if(search.DataRichiamo){
            const dataRichiamo= search.DataRichiamo;
            if(dataRichiamo.operation){
                query.DataRichiamo = {}
                switch(dataRichiamo.operation){
                    case "not contains":
                        query.DataRichiamo["$nin"] = dataRichiamo.value;
                        break;
                    case "equal":
                        query.DataRichiamo = dataRichiamo.value;
                        break;
                    case "not equal":
                        query.DataRichiamo["$ne"] = dataRichiamo.value;
                        break;
                    case "is empty":
                        query.DataRichiamo["$exists"] = false;
                        break;
                    case "is not empty":
                        query.DataRichiamo["$exists"] = true;
                        break;
                    default:
                        query.DataRichiamo = new RegExp(dataRichiamo.value, 'i');
                        break;
                }
            }
        }

        if(search.Denominazione){
            const denominazione= search.Denominazione;
            if(denominazione.operation){
                query.Denominazione = {}
                switch(denominazione.operation){
                    case "not contains":
                        query.Denominazione["$nin"] = denominazione.value;
                        break;
                    case "equal":
                        query.Denominazione = denominazione.value;
                        break;
                    case "not equal":
                        query.Denominazione["$ne"] = denominazione.value;
                        break;
                    case "is empty":
                        query.Denominazione["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Denominazione["$exists"] = true;
                        break;
                    default:
                        query.Denominazione = new RegExp(denominazione.value, 'i');
                        break;
                }
            }
        }

        if(search.Email){
            const email= search.Email;
            if(email.operation){
                query.Email = {}
                switch(email.operation){
                    case "not contains":
                        query.Email["$nin"] = email.value;
                        break;
                    case "equal":
                        query.Email = email.value;
                        break;
                    case "not equal":
                        query.Email["$ne"] = email.value;
                        break;
                    case "is empty":
                        query.Email["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Email["$exists"] = true;
                        break;
                    default:
                        query.Email = new RegExp(email.value, 'i');
                        break;
                }
            }
        }

        if(search.Fax){
            const fax= search.Fax;
            if(fax.operation){
                query.Fax = {}
                switch(fax.operation){
                    case "not contains":
                        query.Fax["$nin"] = fax.value;
                        break;
                    case "equal":
                        query.Fax = fax.value;
                        break;
                    case "not equal":
                        query.fax["$ne"] = fax.value;
                        break;
                    case "is empty":
                        query.Fax["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Fax["$exists"] = true;
                        break;
                    default:
                        query.Fax = new RegExp(fax.value, 'i');
                        break;
                }
            }
        }

        if(search.IBAN){
            const iban= search.IBAN;
            if(iban.operation){
                query.IBAN = {}
                switch(iban.operation){
                    case "not contains":
                        query.IBAN["$nin"] = iban.value;
                        break;
                    case "equal":
                        query.IBAN = iban.value;
                        break;
                    case "not equal":
                        query.IBAN["$ne"] = iban.value;
                        break;
                    case "is empty":
                        query.IBAN["$exists"] = false;
                        break;
                    case "is not empty":
                        query.IBAN["$exists"] = true;
                        break;
                    default:
                        query.IBAN = new RegExp(iban.value, 'i');
                        break;
                }
            }
        }

        if(search.ImportoRata){
            const importoRata= search.ImportoRata;
            if(importoRata.operation){
                query.ImportoRata = {}
                switch(importoRata.operation){
                    case "not contains":
                        query.ImportoRata["$nin"] = importoRata.value;
                        break;
                    case "equal":
                        query.ImportoRata = importoRata.value;
                        break;
                    case "not equal":
                        query.ImportoRata["$ne"] = importoRata.value;
                        break;
                    case "is empty":
                        query.ImportoRata["$exists"] = false;
                        break;
                    case "is not empty":
                        query.ImportoRata["$exists"] = true;
                        break;
                    default:
                        query.ImportoRata = new RegExp(importoRata.value, 'i');
                        break;
                }
            }
        }

        if(search.ImportoRataStorica){
            const importoRataStorica= search.ImportoRataStorica;
            if(importoRataStorica.operation){
                query.ImportoRataStorica = {}
                switch(importoRataStorica.operation){
                    case "not contains":
                        query.ImportoRataStorica["$nin"] = importoRataStorica.value;
                        break;
                    case "equal":
                        query.ImportoRataStorica = importoRataStorica.value;
                        break;
                    case "not equal":
                        query.ImportoRataStorica["$ne"] = importoRataStorica.value;
                        break;
                    case "is empty":
                        query.ImportoRataStorica["$exists"] = false;
                        break;
                    case "is not empty":
                        query.ImportoRataStorica["$exists"] = true;
                        break;
                    default:
                        query.ImportoRataStorica = importoRataStorica.value;
                        break;
                }
            }
        }

        if(search.ImportoSaldoAttualizzato){
            const importoSaldoAttualizzato= search.ImportoSaldoAttualizzato;
            if(importoSaldoAttualizzato.operation){
                query.ImportoSaldoAttualizzato = {}
                switch(importoSaldoAttualizzato.operation){
                    case "not contains":
                        query.ImportoSaldoAttualizzato["$nin"] = importoSaldoAttualizzato.value;
                        break;
                    case "equal":
                        query.ImportoSaldoAttualizzato = importoSaldoAttualizzato.value;
                        break;
                    case "not equal":
                        query.ImportoSaldoAttualizzato["$ne"] = importoSaldoAttualizzato.value;
                        break;
                    case "is empty":
                        query.ImportoSaldoAttualizzato["$exists"] = false;
                        break;
                    case "is not empty":
                        query.ImportoSaldoAttualizzato["$exists"] = true;
                        break;
                    default:
                        query.ImportoSaldoAttualizzato = importoSaldoAttualizzato.value;
                        break;
                }
            }
        }

        if(search.ImportoSaldoContabile){
            const importoSaldoContabile= search.ImportoSaldoContabile;
            if(importoSaldoContabile.operation){
                query.ImportoSaldoContabile = {}
                switch(importoSaldoContabile.operation){
                    case "not contains":
                        query.ImportoSaldoContabile["$nin"] = importoSaldoContabile.value;
                        break;
                    case "equal":
                        query.ImportoSaldoContabile = importoSaldoContabile.value;
                        break;
                    case "not equal":
                        query.ImportoSaldoContabile["$ne"] = importoSaldoContabile.value;
                        break;
                    case "is empty":
                        query.ImportoSaldoContabile["$exists"] = false;
                        break;
                    case "is not empty":
                        query.ImportoSaldoContabile["$exists"] = true;
                        break;
                    default:
                        query.ImportoSaldoContabile = new RegExp(importoSaldoContabile.value, 'i');
                        break;
                }
            }
        }

        if(search.ImportoSaldoStorico){
            const importoSaldoStorico= search.ImportoSaldoStorico;
            if(importoSaldoStorico.operation){
                query.ImportoSaldoStorico = {}
                switch(importoSaldoStorico.operation){
                    case "not contains":
                        query.ImportoSaldoStorico["$nin"] = importoSaldoStorico.value;
                        break;
                    case "equal":
                        query.ImportoSaldoStorico = importoSaldoStorico.value;
                        break;
                    case "not equal":
                        query.ImportoSaldoStorico["$ne"] = importoSaldoStorico.value;
                        break;
                    case "is empty":
                        query.ImportoSaldoStorico["$exists"] = false;
                        break;
                    case "is not empty":
                        query.ImportoSaldoStorico["$exists"] = true;
                        break;
                    default:
                        query.ImportoSaldoStorico = importoSaldoStorico.value;
                        break;
                }
            }
        }

        if(search.Indirizzo){
            const indirizzo= search.Indirizzo;
            if(indirizzo.operation){
                query.Indirizzo = {}
                switch(indirizzo.operation){
                    case "not contains":
                        query.Indirizzo["$nin"] = indirizzo.value;
                        break;
                    case "equal":
                        query.Indirizzo = indirizzo.value;
                        break;
                    case "not equal":
                        query.Indirizzo["$ne"] = indirizzo.value;
                        break;
                    case "is empty":
                        query.Indirizzo["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Indirizzo["$exists"] = true;
                        break;
                    default:
                        query.Indirizzo = new RegExp(indirizzo.value, 'i');
                        break;
                }
            }
        }

        if(search.Indirizzo2){
            const indirizzo2= search.Indirizzo2;
            if(indirizzo2.operation){
                query.Indirizzo2 = {}
                switch(indirizzo2.operation){
                    case "not contains":
                        query.Indirizzo["$nin"] = indirizzo2.value;
                        break;
                    case "equal":
                        query.Indirizzo2 = indirizzo2.value;
                        break;
                    case "not equal":
                        query.Indirizzo2["$ne"] = indirizzo2.value;
                        break;
                    case "is empty":
                        query.Indirizzo2["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Indirizzo2["$exists"] = true;
                        break;
                    default:
                        query.Indirizzo2 = new RegExp(indirizzo2.value, 'i');
                        break;
                }
            }
        }

        if(search.Località){
            const località= search.Località;
            if(località.operation){
                query.Località = {}
                switch(località.operation){
                    case "not contains":
                        query.Località["$nin"] = località.value;
                        break;
                    case "equal":
                        query.Località = località.value;
                        break;
                    case "not equal":
                        query.Località["$ne"] = località.value;
                        break;
                    case "is empty":
                        query.Località["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Località["$exists"] = true;
                        break;
                    default:
                        query.Località = new RegExp(località.value, 'i');
                        break;
                }
            }
        }

        if(search.Località2){
            const località2= search.Località2;
            if(località2.operation){
                query.Località2 = {}
                switch(località2.operation){
                    case "not contains":
                        query.Località2["$nin"] = località2.value;
                        break;
                    case "equal":
                        query.Località2 = località2.value;
                        break;
                    case "not equal":
                        query.Località2["$ne"] = località2.value;
                        break;
                    case "is empty":
                        query.Località2["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Località2["$exists"] = true;
                        break;
                    default:
                        query.Località2 = new RegExp(località2.value, 'i');
                        break;
                }
            }
        }

        if(search.Nome){
            const nome= search.Nome;
            if(nome.operation){
                query.Nome = {}
                switch(nome.operation){
                    case "not contains":
                        query.Nome["$nin"] = nome.value;
                        break;
                    case "equal":
                        query.Nome = nome.value;
                        break;
                    case "not equal":
                        query.Nome["$ne"] = nome.value;
                        break;
                    case "is empty":
                        query.Nome["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Nome["$exists"] = true;
                        break;
                    default:
                        query.Nome = new RegExp(nome.value, 'i');
                        break;
                }
            }
        }

        if(search.Note){
            const note= search.Note;
            if(note.operation){
                query.Note = {}
                switch(note.operation){
                    case "not contains":
                        query.Note["$nin"] = note.value;
                        break;
                    case "equal":
                        query.Note = note.value;
                        break;
                    case "not equal":
                        query.Note["$ne"] = note.value;
                        break;
                    case "is empty":
                        query.Note["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Note["$exists"] = true;
                        break;
                    default:
                        query.Note = new RegExp(note.value, 'i');
                        break;
                }
            }
        }

        if(search.Operatore){
            const operatore= search.Operatore;
            if(operatore.operation){
                query.Operatore = {}
                switch(operatore.operation){
                    case "not contains":
                        query.Operatore["$nin"] = operatore.value;
                        break;
                    case "equal":
                        query.Operatore = operatore.value;
                        break;
                    case "not equal":
                        query.Operatore["$ne"] = operatore.value;
                        break;
                    case "is empty":
                        query.Operatore["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Operatore["$exists"] = true;
                        break;
                    default:
                        query.Operatore = new RegExp(operatore.value, 'i');
                        break;
                }
            }
        }

        if(search.PartitaIVA){
            const partitaIva= search.PartitaIVA;
            if(partitaIva.operation){
                query.PartitaIVA = {}
                switch(partitaIva.operation){
                    case "not contains":
                        query.PartitaIVA["$nin"] = partitaIva.value;
                        break;
                    case "equal":
                        query.PartitaIVA = partitaIva.value;
                        break;
                    case "not equal":
                        query.PartitaIVA["$ne"] = partitaIva.value;
                        break;
                    case "is empty":
                        query.PartitaIVA["$exists"] = false;
                        break;
                    case "is not empty":
                        query.PartitaIVA["$exists"] = true;
                        break;
                    default:
                        query.PartitaIVA = new RegExp(partitaIva.value, 'i');
                        break;
                }
            }
        }

        if(search.Provincia){
            const provincia= search.Provincia;
            if(provincia.operation){
                query.Provincia = {}
                switch(provincia.operation){
                    case "not contains":
                        query.Provincia["$nin"] = provincia.value;
                        break;
                    case "equal":
                        query.Provincia = provincia.value;
                        break;
                    case "not equal":
                        query.Provincia["$ne"] = provincia.value;
                        break;
                    case "is empty":
                        query.Provincia["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Provincia["$exists"] = true;
                        break;
                    default:
                        query.Provincia = new RegExp(provincia.value, 'i');
                        break;
                }
            }
        }

        if(search.Provincia2){
            const provincia2= search.Provincia2;
            if(provincia2.operation){
                query.Provincia2 = {}
                switch(provincia2.operation){
                    case "not contains":
                        query.Provincia2["$nin"] = provincia2.value;
                        break;
                    case "equal":
                        query.Provincia2 = provincia2.value;
                        break;
                    case "not equal":
                        query.Provincia2["$ne"] = provincia2.value;
                        break;
                    case "is empty":
                        query.Provincia2["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Provincia2["$exists"] = true;
                        break;
                    default:
                        query.Provincia2 = new RegExp(provincia2.value, 'i');
                        break;
                }
            }
        }

        if(search.Sesso){
            const sesso= search.Sesso;
            if(sesso.operation){
                query.Sesso = {}
                switch(sesso.operation){
                    case "not contains":
                        query.Sesso["$nin"] = sesso.value;
                        break;
                    case "equal":
                        query.Sesso = sesso.value;
                        break;
                    case "not equal":
                        query.Sesso["$ne"] = sesso.value;
                        break;
                    case "is empty":
                        query.Sesso["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Sesso["$exists"] = true;
                        break;
                    default:
                        query.Sesso = new RegExp(sesso.value, 'i');
                        break;
                }
            }
        }

        if(search.Telefono1){
            const telefono1= search.Telefono1;
            if(telefono1.operation){
                query.Telefono1 = {}
                switch(telefono1.operation){
                    case "not contains":
                        query.Telefono1["$nin"] = telefono1.value;
                        break;
                    case "equal":
                        query.Telefono1 = telefono1.value;
                        break;
                    case "not equal":
                        query.Telefono1["$ne"] = telefono1.value;
                        break;
                    case "is empty":
                        query.Telefono1["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Telefono1["$exists"] = true;
                        break;
                    default:
                        query.Telefono1 = new RegExp(telefono1.value, 'i');
                        break;
                }
            }
        }

        if(search.Telefono2){
            const telefono2= search.Telefono2;
            if(telefono2.operation){
                query.Telefono2 = {}
                switch(telefono2.operation){
                    case "not contains":
                        query.Telefono2["$nin"] = telefono2.value;
                        break;
                    case "equal":
                        query.Telefono2 = telefono2.value;
                        break;
                    case "not equal":
                        query.Telefono2["$ne"] = telefono2.value;
                        break;
                    case "is empty":
                        query.Telefono2["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Telefono2["$exists"] = true;
                        break;
                    default:
                        query.Telefono2 = new RegExp(telefono2.value, 'i');
                        break;
                }
            }
        }

        if(search.Telefono3){
            const telefono3= search.Telefono3;
            if(telefono3.operation){
                query.Telefono3 = {}
                switch(telefono3.operation){
                    case "not contains":
                        query.Telefono3["$nin"] = telefono3.value;
                        break;
                    case "equal":
                        query.Telefono3 = telefono3.value;
                        break;
                    case "not equal":
                        query.Telefono3["$ne"] = telefono3.value;
                        break;
                    case "is empty":
                        query.Telefono3["$exists"] = false;
                        break;
                    case "is not empty":
                        query.Telefono3["$exists"] = true;
                        break;
                    default:
                        query.Telefono3 = new RegExp(telefono3.value, 'i');
                        break;
                }
            }
        }

        if(search.TipoCliente){
            const tipoCliente = search.TipoCliente;
            if(tipoCliente.operation){
                query.TipoCliente= {}
                switch(tipoCliente.operation){
                    case "not contains":
                        query.TipoCliente["$nin"] = tipoCliente.value;
                        break;
                    case "equal":
                        query.TipoCliente = tipoCliente.value;
                        break;
                    case "not equal":
                        query.TipoCliente["$ne"] = tipoCliente.value;
                        break;
                    case "is empty":
                        query.TipoCliente["$exists"] = false;
                        break;
                    case "is not empty":
                        query.TipoCliente["$exists"] = true;
                        break;
                    default:
                        query.TipoCliente = new RegExp(tipoCliente.value, 'i');
                        break;
                }
            }
        }

        if(search.TipoContoStorico){
            const tipoContoStorico = search.TipoContoStorico;
            if(tipoContoStorico.operation){
                query.TipoContoStorico= {}
                switch(tipoContoStorico.operation){
                    case "not contains":
                        query.TipoContoStorico["$nin"] = tipoContoStorico.value;
                        break;
                    case "equal":
                        query.TipoContoStorico = tipoContoStorico.value;
                        break;
                    case "not equal":
                        query.TipoContoStorico["$ne"] = tipoContoStorico.value;
                        break;
                    case "is empty":
                        query.TipoContoStorico["$exists"] = false;
                        break;
                    case "is not empty":
                        query.TipoContoStorico["$exists"] = true;
                        break;
                    default:
                        query.TipoContoStorico = new RegExp(tipoContoStorico.value, 'i');
                        break;
                }
            }
        }

        if(search.TipoPagamentoStorico){
            const tipoPagamentoStorico= search.TipoPagamentoStorico;
            if(tipoPagamentoStorico.operation){
                query.TipoPagamentoStorico= {}
                switch(tipoPagamentoStorico.operation){
                    case "not contains":
                        query.TipoPagamentoStorico["$nin"] = tipoPagamentoStorico.value;
                        break;
                    case "equal":
                        query.TipoPagamentoStorico = tipoPagamentoStorico.value;
                        break;
                    case "not equal":
                        query.TipoPagamentoStorico["$ne"] = tipoPagamentoStorico.value;
                        break;
                    case "is empty":
                        query.TipoPagamentoStorico["$exists"] = false;
                        break;
                    case "is not empty":
                        query.TipoPagamentoStorico["$exists"] = true;
                        break;
                    default:
                        query.TipoPagamentoStorico= new RegExp(tipoPagamentoStorico.value, 'i');
                        break;
                }
            }
        }

        if(search.TipoRagioneSociale){
            const tipoRagioneSociale= search.TipoRagioneSociale;
            if(tipoRagioneSociale.operation){
                query.TipoRagioneSociale= {}
                switch(tipoRagioneSociale.operation){
                    case "not contains":
                        query.TipoRagioneSociale["$nin"] = tipoRagioneSociale.value;
                        break;
                    case "equal":
                        query.TipoRagioneSociale = tipoRagioneSociale.value;
                        break;
                    case "not equal":
                        query.TipoRagioneSociale["$ne"] = tipoRagioneSociale.value;
                        break;
                    case "is empty":
                        query.TipoRagioneSociale["$exists"] = false;
                        break;
                    case "is not empty":
                        query.TipoRagioneSociale["$exists"] = true;
                        break;
                    default:
                        query.TipoRagioneSociale = new RegExp(tipoRagioneSociale.value, 'i');
                        break;
                }
            }
        }

        if(search.TitoloAcc){
            const titoloAcc= search.TitoloAcc;
            if(titoloAcc.operation){
                query.TitoloAcc= {}
                switch(titoloAcc.operation){
                    case "not contains":
                        query.TitoloAcc["$nin"] = titoloAcc.value;
                        break;
                    case "equal":
                        query.TitoloAcc = titoloAcc.value;
                        break;
                    case "not equal":
                        query.TitoloAcc["$ne"] = titoloAcc.value;
                        break;
                    case "is empty":
                        query.TitoloAcc["$exists"] = false;
                        break;
                    case "is not empty":
                        query.TitoloAcc["$exists"] = true;
                        break;
                    default:
                        query.TitoloAcc = new RegExp(titoloAcc.value, 'i');
                        break;
                }
            }
        }

        // console.log(search.Denominazione)

        const data = await Model.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)

        const count = await Model.count()
        .count()

        // return response with posts, total pages, and current page
        res.json({
                data,
                totalPages: Math.ceil(count / limit),
                currentPage: page
        });
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
