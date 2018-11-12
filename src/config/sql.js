module.exports = {
  all: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Altar%'
    and ap.class like '%BP_PL_Chair_Throne%'
    or ap.class like '%BP_PL_Bed_%'
    or ap.class like '%BP_PL_Bedroll_%'
    or ap.class like '%BP_PL_Crafting%'
    or ap.class like '%BuildFoundation%'
    or ap.class like '%BuildTriangleFoundation%'
    or ap.class like '%BP_PL_Chest%'
    or ap.class like '%BP_PL_Maproom%'
    or ap.class like '%BP_PL_Icebox%'
    or ap.class like '%BP_PL_Signpost%'
    or ap.class like '%BP_PL_Wallsign%'
    or ap.class like '%BP_PL_Water_Well%'
    or ap.class like '%BP_PL_WorkStation%'
    or ap.class like '%Trebuchet_V2%'
    or ap.class like '%Pippi%'
  `,
  altars: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Altar%'
  `,
  animalpens: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_Station_AnimalPen%'
  `,
  buildings: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BuildFoundation%'
    or ap.class like '%BuildTriangleFoundation%'
  `,
  beds: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Bedroll_%'
    or ap.class like '%BP_PL_Bed_%'
  `,
  campfires: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_CampFire%'
    or ap.class like '%BP_PL_Crafting_Bonfire%'
  `,
  chests: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Chest%'
  `,
  crabPots: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_CrabPot%'
  `,
  crafting: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting%'
  `,
  fishNets: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Crafting_FishNet%'
  `,
  mapRooms: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Maproom%'
  `,
  pets: `
    select ap.x, ap.y, ap.z, petname.value as name, petinfo.value as info, petowner.value as owner
    from actor_position as ap
    left outer join properties as petname on petname.object_id = ap.id and petname.name like '%petname'
    left outer join properties as petinfo on petinfo.object_id = ap.id and petinfo.name like '%thrallinfo'
    left outer join properties as petowner on petowner.object_id = ap.id and petowner.name like '%owner%'
    where ap.class like '%wildlife%pet%'
    or ap.class like '%pict_wildlife%'
  `,
  pippiThespians: `
    select ap.class, ap.x, ap.y, ap.z, pippi.value as buffer
    from actor_position as ap
    left outer join properties as pippi on pippi.object_id = ap.id and pippi.name like '%mobconfig'
    where ap.class like '%pippi_mob%'
  `,
  pippiAll: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%Pippi%'
  `,
  players: `
    select quote(g.name) as guild_name, quote(g.guildid) as guild_id, quote(c.char_name) as char_name,
    case c.rank WHEN '3' then 'Guild master' WHEN '2' then 'Officer' WHEN '1' then 'Member' WHEN '0' then 'Recruit' ELSE c.rank END rank,
    c.level as level, c.playerid as steam_id, quote(c.id) as char_id, ap.x as x, ap.y as y, ap.z as z,
    datetime(c.lastTimeOnline, 'unixepoch') as last_online from characters as c
    left outer join guilds as g on g.guildid = c.guild
    left outer join actor_position as ap on ap.id = c.id
    order by last_online desc
  `,
  thrones: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Chair_Throne%'
  `,
  trebuchets: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%Trebuchet_V2%'
  `,
  vaults: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Chest_Vault%'
  `,
  waterWells: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%BP_PL_Water_Well%'
  `,
  wheelsOfPain: `
    select ap.class, ap.x, ap.y, ap.z, g.name as guild_name, g.guildid as guild_id, c.char_name, c.id as char_id, b.owner_id from buildings as b
    left outer join actor_position as ap on b.object_id = ap.id
    left outer join guilds as g on g.guildid = b.owner_id
    left outer join characters as c on c.id = b.owner_id
    where b.owner_id > 0
    and ap.class like '%wheelofpain%'
  `,
}
