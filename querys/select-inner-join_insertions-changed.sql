SELECT DISTINCT InsertionTable.InsertionID FROM dbo.AdInsertion as InsertionTable
inner join dbo.AdCampagne as CampaignTable
on InsertionTable.CampagneID = CampaignTable.CampagneID
inner join dbo.AdAnnonceur as AdvertiserTable
on CampaignTable.AnnonceurID = AdvertiserTable.SocieteID
inner join dbo.AdReseauGroupe as GroupTable
on AdvertiserTable.GroupeID = GroupTable.GroupeID
WHERE GroupTable.ReseauID = 'NetworkID'
AND InsertionTable.Statut = 1
AND InsertionTable.Changed = 1
AND InsertionTable.LastModificationDate like '%2019%';