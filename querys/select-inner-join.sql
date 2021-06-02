SELECT * FROM dbo.AdInsertionImage as CreativeTable
inner join dbo.AdInsertion as InsertionTable
on CreativeTable.InsertionID = InsertionTable.InsertionID
inner join dbo.AdCampagne as CampaignTable
on InsertionTable.CampagneID = CampaignTable.CampagneID
inner join dbo.AdAnnonceur as AdvertiserTable
on CampaignTable.AnnonceurID = AdvertiserTable.SocieteID
inner join dbo.AdReseauGroupe as GroupTable
on AdvertiserTable.GroupeID = GroupTable.GroupeID
WHERE GroupTable.ReseauID = 1701 AND CreativeTable.ImageURL like 'turn.com';