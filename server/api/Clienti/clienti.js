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
            query.CAP = {}
            const cap = search.CAP;
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
                    query.CAP = new RegExp(cap.value, 'i');
                    break;
            }
        }

        if(search.Categoria){
            query.Categoria = new RegExp(search.Categoria, 'i');
        }

        if(search.CodiceAgenzia){
            query.CodiceAgenzia = search.CodiceAgenzia;
        }

        if(search.CodiceCliente){
            query.codiceCliente = search.CodiceCliente;
        }

        if(search.CodiceFiscale){
            query.CodiceFiscale = new RegExp(search.CodiceFiscale, 'i');
        }

        if(search.Cognome){
            query.Cognome = new RegExp(search.Cognome, 'i');
        }

        if(search.Contattabile){
            query.Contattabile = search.Contattabile;
        }

        if(search.DataAggiornamentoSaldo){
            query.DataAggiornamentoSaldo = new RegExp(search.DataAggiornamentoSaldo, 'i');
        }

        if(search.DataNascita){
            query.DataNascita = new RegExp(search.DataNascita, 'i');
        }

        if(search.DataRichiamo){
            query.DataRichiamo = new RegExp(search.DataRichiamo, 'i');
        }

        if(search.Denominazione){
            query.Denominazione = new RegExp(search.Denominazione, 'i');
        }

        if(search.Email){
            query.Email = new RegExp(search.Email, 'i');
        }

        if(search.Fax){
            query.Fax = new RegExp(search.Fax, 'i');
        }

        if(search.IBAN){
            query.IBAN = new RegExp(search.IBAN, 'i');
        }

        if(search.ImportoRata){
            query.ImportoRata = new RegExp(search.ImportoRata, 'i');
        }

        if(search.ImportoRataStorica){
            query.ImportoRataStorica = search.ImportoRataStorica;
        }

        if(search.ImportoSaldoAttualizzato){
            query.ImportoSaldoAttualizzato = search.ImportoSaldoAttualizzato;
        }

        if(search.ImportoSaldoContabile){
            query.ImportoSaldoContabile = new RegExp(search.ImportoSaldoContabile, 'i');
        }

        if(search.ImportoSaldoStorico){
            query.ImportoSaldoStorico = search.ImportoSaldoStorico;
        }

        if(search.Indirizzo){
            query.Indirizzo = new RegExp(search.Indirizzo, 'i');
        }

        if(search.Indirizzo2){
            query.Indirizzo2 = new RegExp(search.Indirizzo2, 'i');
        }

        if(search.Località){
            query.Località = new RegExp(search.Località, 'i');
        }

        if(search.Località2){
            query.Località2 = new RegExp(search.Località2, 'i');
        }

        if(search.Nome){
            query.Nome = new RegExp(search.Nome, 'i');
        }

        if(search.Note){
            query.Note = new RegExp(search.Note, 'i');
        }

        if(search.Operatore){
            query.Operatore = new RegExp(search.Operatore, 'i');
        }

        if(search.PartitaIVA){
            query.PartitaIVA = new RegExp(search.PartitaIVA, 'i');
        }

        if(search.Provincia){
            query.Provincia = new RegExp(search.Provincia, 'i');
        }

        if(search.Provincia2){
            query.Provincia2 = new RegExp(search.Provincia2, 'i');
        }

        if(search.Sesso){
            query.Sesso = new RegExp(search.Sesso, 'i');
        }

        if(search.Telefono1){
            query.Telefono1 = new RegExp(search.Telefono1, 'i');
        }

        if(search.Telefono2){
            query.Telefono2 = new RegExp(search.Telefono2, 'i');
        }

        if(search.Telefono3){
            query.Telefono3 = new RegExp(search.Telefono3, 'i');
        }

        if(search.TipoCliente){
            query.TipoCliente = new RegExp(search.TipoCliente, 'i');
        }

        if(search.TipoContoStorico){
            query.TipoContoStorico = new RegExp(search.TipoContoStorico, 'i');
        }

        if(search.TipoPagamentoStorico){
            query.TipoPagamentoStorico = new RegExp(search.TipoPagamentoStorico, 'i');
        }

        if(search.TipoRagioneSociale){
            query.TipoRagioneSociale = new RegExp(search.TipoRagioneSociale, 'i');
        }

        if(search.TitoloAcc){
            query.TitoloAcc = search.TitoloAcc;
        }

        console.log(search.Denominazione)

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
