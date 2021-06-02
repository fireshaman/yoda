SELECT advertiserTable.Id FROM ssp.AdvertiserCategory as advertiserCat
inner join ssp.Advertiser as advertiserTable
on advertiserTable.id = advertiserCat.AdvertiserId
WHERE advertiserCat.CategoryId = '32';